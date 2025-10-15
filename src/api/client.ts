import ky from 'ky'

// Configuration de base pour l'API
export const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})
