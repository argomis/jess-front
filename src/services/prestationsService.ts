import { api } from '../api/client'
import type { Prestation } from '../types/prestation'

export const prestationsService = {
  async getAll(): Promise<Prestation[]> {
    const response = await api.get('prestations').json<{ success: boolean; data: Prestation[] }>()
    return response.data || []
  },

  async getById(id: number): Promise<Prestation> {
    const response = await api.get(`prestations/${id}`).json<{ success: boolean; data: Prestation }>()
    return response.data
  }
}
