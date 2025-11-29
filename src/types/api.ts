// Types for API responses
export interface ApiResponse<T = unknown> {
  success: boolean
  data: T
  message?: string
  error?: string
}

// Types for contact form
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
}

export interface ContactSubmissionResponse {
  id: number
  createdAt: string
}

// Types for webhooks
export interface WebhookPayload {
  event: string
  timestamp: string
  data: Record<string, unknown>
}

// Types for errors
export interface ApiError {
  message: string
  code?: string | number
  details?: unknown
}
