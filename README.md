# Jessica FEDER - Soins énergétiques

Site web professionnel pour Jessica FEDER, infirmière DE spécialisée dans les soins énergétiques (Reiki, harmonisation globale, kinésiologie animale), construit avec React, TypeScript et Vite.

## Architecture

Ce projet fait partie d'un système composé de deux repositories :

- **Frontend** (ce repository) : Interface utilisateur React
- **Backend API** : [jess-api](https://github.com/argomis/jess-api) - API Node.js avec PostgreSQL

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
├── services/        # Services métier (API calls)
├── stores/          # Stores Zustand
├── hooks/           # Hooks personnalisés
├── types/           # Types TypeScript
├── constants/       # Constantes de l'application
├── styles/          # Styles globaux SCSS
├── utils/           # Fonctions utilitaires
└── main.tsx         # Point d'entrée
```

## Prérequis

### Développement local
- Node.js 20+
- Yarn ou npm
- [jess-api](https://github.com/argomis/jess-api) démarré

### Développement Docker (Recommandé)
- Docker
- Docker Compose

## Installation

### Option 1 : Développement Docker (Recommandé)

1. Clonez le repository :
```bash
git clone git@github.com:argomis/jess.git
cd jess
```

2. Démarrez l'environnement de développement :
```bash
yarn docker:dev
```

Cela démarre le frontend sur `http://localhost:5173`

**Note :** L'API backend doit être démarrée séparément. Voir [jess-api](https://github.com/argomis/jess-api)

### Option 2 : Développement local

1. Clonez le repository :
```bash
git clone git@github.com:argomis/jess.git
cd jess
```

2. Installez les dépendances :
```bash
yarn install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env
```

## Configuration

Configurez les variables dans `.env` :

```env
# URL de l'API backend
VITE_API_URL=http://localhost:3001/api
```

## Scripts disponibles

### Développement Docker
- `yarn docker:dev` - Démarre le conteneur de développement
- `yarn docker:build` - Build l'image Docker de production
- `yarn docker:up` - Démarre l'environnement de production
- `yarn docker:down` - Arrête les conteneurs

### Développement local
- `yarn dev` - Démarre le serveur de développement
- `yarn build` - Build de production
- `yarn preview` - Prévisualise le build
- `yarn lint` - Vérifie le code avec ESLint
- `yarn format` - Formate le code avec Prettier
- `yarn format:check` - Vérifie le formatage

## Développement

1. Assurez-vous que l'API backend est démarrée (voir [jess-api](https://github.com/argomis/jess-api))

2. Démarrez le serveur de développement :
```bash
yarn dev
```

3. Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur

## Communication avec l'API

L'application communique avec l'API backend via le service `contactService` qui utilise la bibliothèque `ky` pour les requêtes HTTP.

Exemple d'utilisation :

```typescript
import { contactService } from './services'

// Envoi d'un formulaire de contact
await contactService.submitContact({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '0123456789',
  message: 'Bonjour, je souhaite prendre rendez-vous.'
})
```

## Fonctionnalités

- ✅ Page d'accueil avec présentation professionnelle
- ✅ Page prestations avec FAQ détaillée
- ✅ Formulaire de contact avec validation
- ✅ Visionneuse d'images interactive
- ✅ Navigation responsive
- ✅ Mentions légales conformes RGPD
- ✅ Intégration API pour sauvegarde contacts

## Déploiement

### Production Docker
```bash
# Build l'image de production
yarn docker:build

# Démarre l'environnement de production
yarn docker:up

# Arrête l'environnement de production
yarn docker:down
```

### Production locale
Pour déployer en production :

1. Buildez le projet :
```bash
yarn build
```

2. Les fichiers de production seront dans le dossier `dist/`

3. Configurez votre serveur web pour servir les fichiers statiques et rediriger les routes vers `index.html`
