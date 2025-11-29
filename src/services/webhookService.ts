import { apiClient } from '../api'

// Service for n8n webhooks
export class WebhookService {
  static async sendWebhook(endpoint: string, data: unknown) {
    try {
      const response = await apiClient.post(endpoint, { json: data })
      return response.json()
    } catch (error) {
      console.error("Error sending webhook:", error)
      throw error
    }
  }

  static async sendFormData(endpoint: string, formData: FormData) {
    try {
      const response = await apiClient.post(endpoint, { body: formData })
      return response.json()
    } catch (error) {
      console.error("Error sending form data:", error)
      throw error
    }
  }
}
