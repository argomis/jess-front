import ky from 'ky'
import type { ContactFormData, ContactSubmissionResponse, ApiResponse } from '../types/api'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const contactService = {
  async submitContact(data: ContactFormData): Promise<ContactSubmissionResponse> {
    try {
      const response = await ky
        .post(`${API_BASE_URL}/contact`, {
          json: data,
          timeout: 10000
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