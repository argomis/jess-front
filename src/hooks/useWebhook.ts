import { useState, useCallback } from 'react'
import { WebhookService } from '../services'

interface UseWebhookOptions {
  onSuccess?: (data: unknown) => void
  onError?: (error: Error) => void
}

export const useWebhook = (options: UseWebhookOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const sendWebhook = useCallback(
    async (endpoint: string, data: unknown) => {
      try {
        setIsLoading(true)
        setError(null)

        const result = await WebhookService.sendWebhook(endpoint, data)

        options.onSuccess?.(result)
        return result
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Une erreur est survenue')
        setError(error)
        options.onError?.(error)
        throw error
      } finally {
        setIsLoading(false)
      }
    },
    [options]
  )

  return {
    sendWebhook,
    isLoading,
    error,
  }
}
