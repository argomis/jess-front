import { useState, useCallback } from 'react'

// Fonction pour valider un SIRET
export const validateSiret = (siret: string): boolean => {
  // Suppression des espaces et tirets
  const cleanSiret = siret.replace(/[\s-]/g, '')

  // Vérification de la longueur (14 chiffres)
  if (!/^\d{14}$/.test(cleanSiret)) {
    return false
  }

  // Algorithme de validation SIRET
  let sum = 0
  for (let i = 0; i < 14; i++) {
    let digit = parseInt(cleanSiret[i])

    // Les positions paires (en partant de 0) sont multipliées par 2
    if (i % 2 === 0) {
      digit *= 2
      // Si le résultat est supérieur à 9, on soustrait 9
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
  }

  // Le SIRET est valide si la somme est divisible par 10
  return sum % 10 === 0
}

// Fonction pour formater un SIRET (ajouter des espaces)
export const formatSiret = (siret: string): string => {
  const cleanSiret = siret.replace(/[\s-]/g, '')
  return cleanSiret.replace(/(\d{3})(\d{3})(\d{3})(\d{5})/, '$1 $2 $3 $4')
}

// Fonction pour nettoyer la saisie SIRET (garder uniquement les chiffres)
export const cleanSiretInput = (input: string): string => {
  return input.replace(/[^\d]/g, '').slice(0, 14)
}

export const useSiret = () => {
  const [siret, setSiret] = useState('')
  const [error, setError] = useState('')

  const updateSiret = useCallback((value: string) => {
    // Nettoyage de la saisie
    const cleanValue = cleanSiretInput(value)
    setSiret(cleanValue)

    // Validation en temps réel
    if (cleanValue.length === 14) {
      if (validateSiret(cleanValue)) {
        setError('')
      } else {
        setError('Le numéro SIRET saisi est invalide')
      }
    } else if (cleanValue.length > 0) {
      setError('Le SIRET doit contenir 14 chiffres')
    } else {
      setError('')
    }
  }, [])

  const validate = useCallback((): boolean => {
    if (!siret) {
      setError('Le SIRET est obligatoire')
      return false
    }

    if (siret.length !== 14) {
      setError('Le SIRET doit contenir 14 chiffres')
      return false
    }

    if (!validateSiret(siret)) {
      setError('Le numéro SIRET saisi est invalide')
      return false
    }

    setError('')
    return true
  }, [siret])

  const formattedSiret = siret ? formatSiret(siret) : ''

  return {
    siret,
    formattedSiret,
    error,
    updateSiret,
    validate,
    isValid: siret.length === 14 && validateSiret(siret),
  }
}
