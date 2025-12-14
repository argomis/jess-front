import { useState, useEffect } from 'react'
import { prestationsService } from '../../services/prestationsService'
import type { Prestation } from '../../types/prestation'
import './Prestations.scss'

interface AccordionItem {
  title: string
  text: string
}

interface AccordionProps {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <p key={index} className={line === '' ? 'accordion__answer-spacer' : ''}>
        {line}
      </p>
    ))
  }

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <div key={index} className='accordion__item'>
          <button
            className={`accordion__question ${openItems.includes(index) ? 'accordion__question--open' : ''}`}
            onClick={() => toggleItem(index)}
          >
            {item.title}
            <span className={`accordion__icon ${openItems.includes(index) ? 'accordion__icon--open' : ''}`}>
              ▼
            </span>
          </button>
          {openItems.includes(index) && (
            <div className='accordion__answer'>
              {formatText(item.text)}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export const Prestations = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPrestations()
  }, [])

  const fetchPrestations = async () => {
    try {
      setLoading(true)
      const data = await prestationsService.getAll()
      // Trier par position
      const sorted = data.sort((a, b) => (a.position || 0) - (b.position || 0))
      setPrestations(sorted)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement des prestations')
      console.error('Error fetching prestations:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className='prestations'>
        <div className='prestations__loading'>
          <p>Chargement des prestations...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='prestations'>
        <div className='prestations__error'>
          <p>❌ {error}</p>
          <button onClick={fetchPrestations}>Réessayer</button>
        </div>
      </div>
    )
  }

  if (prestations.length === 0) {
    return (
      <div className='prestations'>
        <div className='prestations__empty'>
          <p>Aucune prestation disponible pour le moment</p>
        </div>
      </div>
    )
  }

  return (
    <div className='prestations'>
      {prestations.map((prestation, index) => (
        <section
          key={prestation.id}
          className={`prestations__section ${index % 2 === 1 ? 'prestations__section--alt' : ''}`}
        >
          <div className='prestations__container'>
            <h1 className='prestations__title'>{prestation.title}</h1>

            {prestation.images && prestation.images.length > 0 && (
              <div className='prestations__images'>
                {prestation.images.map((imageUrl, imgIndex) => (
                  <div key={imgIndex} className='prestations__image'>
                    <img src={imageUrl} alt={`${prestation.title} - Image ${imgIndex + 1}`} />
                  </div>
                ))}
              </div>
            )}

            {prestation.collapsables && prestation.collapsables.length > 0 && (
              <Accordion items={prestation.collapsables} />
            )}
          </div>
        </section>
      ))}
    </div>
  )
}