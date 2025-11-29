// URLs and endpoints
export const API_ENDPOINTS = {
  WEBHOOKS: '/webhooks',
  HEALTH: '/health',
} as const

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Server connection error',
  VALIDATION_ERROR: 'Invalid data',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Access forbidden',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Internal server error',
} as const

// Success messages
export const SUCCESS_MESSAGES = {
  DATA_SAVED: 'Data saved successfully',
  DATA_UPDATED: 'Data updated successfully',
  DATA_DELETED: 'Data deleted successfully',
} as const
