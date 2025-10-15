// URLs et endpoints
export const API_ENDPOINTS = {
  WEBHOOKS: '/webhooks',
  HEALTH: '/health',
} as const

// Messages d'erreur
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erreur de connexion au serveur',
  VALIDATION_ERROR: 'Données invalides',
  UNAUTHORIZED: 'Non autorisé',
  FORBIDDEN: 'Accès interdit',
  NOT_FOUND: 'Ressource non trouvée',
  SERVER_ERROR: 'Erreur interne du serveur',
} as const

// Messages de succès
export const SUCCESS_MESSAGES = {
  DATA_SAVED: 'Données sauvegardées avec succès',
  DATA_UPDATED: 'Données mises à jour avec succès',
  DATA_DELETED: 'Données supprimées avec succès',
} as const
