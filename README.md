# OPPBTP DUER - Front

Application web frontend pour le projet OPPBTP DUER, construite avec React, TypeScript et Vite.

## Stack technique

- **ReactJS** - Bibliothèque UI
- **Vite** - Outil de build
- **TypeScript** - Typage statique
- **Yarn** - Gestionnaire de paquets
- **Zustand** - Gestion d'état
- **React Router DOM** - Navigation
- **ky** - Client HTTP
- **Prettier** - Formatage de code
- **SCSS** - Préprocesseur CSS

## Structure du projet

```
src/
├── api/              # Configuration API et clients HTTP
├── assets/           # Images, icônes, etc.
├── components/       # Composants réutilisables
├── pages/           # Pages de l'application
├── router/          # Configuration du routage
├── services/        # Services métier
├── stores/          # Stores Zustand
├── hooks/           # Hooks personnalisés
├── types/           # Types TypeScript
├── constants/       # Constantes de l'application
├── styles/          # Styles globaux SCSS
├── utils/           # Fonctions utilitaires
└── main.tsx         # Point d'entrée
```

## Installation

```bash
yarn install
```

## Scripts disponibles

- `yarn dev` - Démarre le serveur de développement
- `yarn build` - Build de production
- `yarn preview` - Prévisualise le build
- `yarn lint` - Vérifie le code avec ESLint
- `yarn format` - Formate le code avec Prettier
- `yarn format:check` - Vérifie le formatage

## Configuration

Copiez `.env.example` vers `.env` et configurez les variables :

```env
VITE_API_URL=http://localhost:3000/api
```

## Développement

1. Démarrez le serveur de développement :

```bash
yarn dev
```

2. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur

## Communication avec n8n

L'application communique avec n8n via des webhooks en utilisant le service `WebhookService` qui utilise la bibliothèque `ky` pour les requêtes HTTP.

Exemple d'utilisation :

```typescript
import { WebhookService } from './services'

// Envoi d'un webhook
await WebhookService.sendWebhook('/webhook-endpoint', {
  event: 'user-action',
  data: { userId: 123 },
})
```
