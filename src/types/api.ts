// Types pour les réponses d'API
export interface ApiResponse<T = unknown> {
  success: boolean
  data: T
  message?: string
  error?: string
}

// Types pour les webhooks
export interface WebhookPayload {
  event: string
  timestamp: string
  data: Record<string, unknown>
}

// Types pour les erreurs
export interface ApiError {
  message: string
  code?: string | number
  details?: unknown
}
