import { useEffect, useRef } from 'react'
import './FloatingLeaves.scss'

interface Leaf {
  id: number
  scale: number
  duration: number
  startTime: number
  controlPoint1: { x: number, y: number }
  controlPoint2: { x: number, y: number }
  amplitude: number
}

export const FloatingLeaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const leavesRef = useRef<Leaf[]>([])
  const imageRef = useRef<HTMLImageElement | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  const SPEED_MIN = 12000 // 12 secondes en ms
  const SPEED_MAX = 20000 // 20 secondes en ms
  const REGENERATE_INTERVAL = 20000 // Régénérer toutes les 20s

  // Générer des points de contrôle pour une courbe en S
  const generateCurvePoints = (width: number, height: number, amplitude: number) => {
    // Pour une courbe en S : contrôle perpendiculaire à la diagonale
    // Une fois à droite, une fois à gauche
    const cp1x = width * 0.25 + amplitude
    const cp1y = height * 0.25
    const cp2x = width * 0.75 - amplitude
    const cp2y = height * 0.75

    return {
      controlPoint1: { x: cp1x, y: cp1y },
      controlPoint2: { x: cp2x, y: cp2y }
    }
  }

  // Calculer position sur courbe de Bézier cubique
  const getBezierPoint = (t: number, start: {x: number, y: number}, cp1: {x: number, y: number}, cp2: {x: number, y: number}, end: {x: number, y: number}) => {
    const t1 = 1 - t
    const t1_3 = t1 * t1 * t1
    const t1_2_t = 3 * t1 * t1 * t
    const t1_t_2 = 3 * t1 * t * t
    const t_3 = t * t * t

    return {
      x: t1_3 * start.x + t1_2_t * cp1.x + t1_t_2 * cp2.x + t_3 * end.x,
      y: t1_3 * start.y + t1_2_t * cp1.y + t1_t_2 * cp2.y + t_3 * end.y
    }
  }

  // Générer une seule feuille avec des paramètres aléatoires
  const generateSingleLeaf = (width: number, height: number, startTime: number): Leaf => {
    const amplitude = (Math.random() * 50 + 30) * (Math.random() > 0.5 ? 1 : -1)
    const { controlPoint1, controlPoint2 } = generateCurvePoints(width, height, amplitude)

    return {
      id: Math.random(),
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * (SPEED_MAX - SPEED_MIN) + SPEED_MIN,
      startTime: startTime + Math.random() * 5000,
      controlPoint1,
      controlPoint2,
      amplitude
    }
  }

  const generateLeaves = (width: number, height: number) => {
    const numLeaves = Math.floor(Math.random() * 3) + 1 // 1 à 3 feuilles
    const now = performance.now()
    const newLeaves: Leaf[] = []

    console.log(`Generating ${numLeaves} leaves for canvas ${width}x${height}`)

    for (let i = 0; i < numLeaves; i++) {
      newLeaves.push(generateSingleLeaf(width, height, now))
    }

    console.log('Generated leaves:', newLeaves)
    leavesRef.current = newLeaves
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    console.log('FloatingLeaves mounted')

    const animate = (timestamp: number) => {
      console.log('Animate called at', timestamp)
      const ctx = canvas.getContext('2d')
      const image = imageRef.current

      if (!ctx || !image || !image.complete) {
        console.log('Waiting for canvas/image:', { ctx: !!ctx, image: !!image, complete: image?.complete })
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      // Utiliser les dimensions CSS, pas les dimensions canvas (qui sont multipliées par DPR)
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      // Effacer le canvas (en utilisant les vraies dimensions canvas)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let drawnCount = 0
      let skippedCount = 0
      let completedCount = 0

      // Dessiner chaque feuille
      leavesRef.current.forEach(leaf => {
        const elapsed = timestamp - leaf.startTime

        if (elapsed < 0) {
          skippedCount++
          return // Pas encore commencé
        }

        // Progression linéaire de 0 à 1
        let progress = elapsed / leaf.duration

        // Si la feuille a terminé son cycle
        if (progress >= 1) {
          completedCount++
          return // Ne pas dessiner les feuilles terminées
        }

        drawnCount++

        // Points de la courbe
        const start = { x: 0, y: height }
        const end = { x: width, y: 0 }

        // Position sur la courbe
        const pos = getBezierPoint(progress, start, leaf.controlPoint1, leaf.controlPoint2, end)

        // Rotation basée sur la progression
        const rotation = progress * Math.PI * 2

        // Dessiner la feuille
        ctx.save()
        ctx.translate(pos.x, pos.y)
        ctx.rotate(rotation)
        ctx.scale(leaf.scale, leaf.scale)
        ctx.globalAlpha = 0.5

        const size = 60
        ctx.drawImage(image, -size / 2, -size / 2, size, size)

        ctx.restore()
      })

      // Si toutes les feuilles ont terminé, générer un nouveau groupe aléatoire
      if (completedCount > 0 && completedCount === leavesRef.current.length) {
        console.log('All leaves completed, generating new batch')
        generateLeaves(width, height)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Charger l'image
    const image = new Image()
    image.src = '/ginko.png'
    image.onload = () => {
      console.log('Image loaded successfully, size:', image.width, 'x', image.height)
      imageRef.current = image

      // Démarrer l'animation maintenant que l'image est chargée
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    image.onerror = (e) => {
      console.error('Failed to load image:', e)
    }

    // Adapter la taille du canvas
    const updateCanvasSize = () => {
      const parent = canvas.parentElement
      if (parent) {
        const dpr = window.devicePixelRatio || 1
        const rect = parent.getBoundingClientRect()

        // Définir la taille d'affichage CSS
        canvas.style.width = rect.width + 'px'
        canvas.style.height = rect.height + 'px'

        // Définir la taille réelle du canvas en tenant compte du devicePixelRatio
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr

        // Mettre à l'échelle le contexte
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.scale(dpr, dpr)
        }

        console.log('Canvas size:', rect.width, rect.height, 'DPR:', dpr)

        // Régénérer les feuilles avec les nouvelles dimensions (en CSS pixels)
        generateLeaves(rect.width, rect.height)
      }
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="floating-leaves">
      <canvas ref={canvasRef} />
    </div>
  )
}
