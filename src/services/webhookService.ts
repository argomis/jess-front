import { apiClient } from '../api'

// Service pour les webhooks n8n
export class WebhookService {
  static async sendWebhook(endpoint: string, data: unknown) {
    try {
      const response = await apiClient.post(endpoint, { json: data })
      return response.json()
    } catch (error) {
      console.error("Erreur lors de l'envoi du webhook:", error)
      throw error
    }
  }

  static async sendFormData(endpoint: string, formData: FormData) {
    try {
      const response = await apiClient.post(endpoint, { body: formData })
      return response.json()
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
      throw error
    }
  }
}
