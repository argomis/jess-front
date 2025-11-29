import { api } from '../api/client'
import type { ContactFormData, ContactSubmissionResponse, ApiResponse } from '../types/api'

export const contactService = {
  async submitContact(data: ContactFormData): Promise<ContactSubmissionResponse> {
    try {
      const response = await api
        .post('contact', {
          json: data
        })
        .json<ApiResponse<ContactSubmissionResponse>>()

      if (!response.success) {
        throw new Error(response.error || 'Failed to submit contact form')
      }

      return response.data
    } catch (error) {
      console.error('Error submitting contact form:', error)
      throw error instanceof Error ? error : new Error('Unknown error occurred')
    }
  }
}