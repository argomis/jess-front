# Jessica FEDER - Soins énergétiques

Site web professionnel pour Jessica FEDER, infirmière DE spécialisée dans les soins énergétiques (Reiki, harmonisation globale, kinésiologie animale).

## 🚀 Lancement rapide (Standalone)

```bash
# 1. Cloner le repository
git clone git@github-argomis:argomis/jess-front.git
cd jess-front

# 2. Installer les dépendances
yarn install

# 3. Configurer l'API
cp .env.example .env
# Éditer .env et configurer VITE_API_URL=http://localhost:3001/api

# 4. Lancer le serveur de développement (hot reload activé)
yarn dev
```

Le site sera accessible sur **http://localhost:5173**

✨ **Hot Reload activé !** Vite recharge automatiquement la page à chaque modification de code.

**⚠️ Important :** L'API doit être démarrée (voir [jess-api](https://github.com/argomis/jess-api))

## 🏗️ Architecture

Ce projet fait partie de l'écosystème Jessica FEDER :

- **Frontend** (ce repository) : Interface utilisateur React
- **API** : [jess-api](https://github.com/argomis/jess-api) - Backend Node.js avec PostgreSQL
- **Backoffice** : [jess-bo](https://github.com/argomis/jess-bo) - Interface d'administration

## 📦 Stack technique

- **React 19** - Bibliothèque UI
- **Vite 7** - Outil de build ultra-rapide
- **TypeScript** - Typage statique
- **Yarn** - Gestionnaire de paquets
- **Zustand** - Gestion d'état légère
- **React Router DOM** - Navigation SPA
- **ky** - Client HTTP moderne
- **SCSS** - Préprocesseur CSS
- **Prettier** - Formatage de code

## 📁 Structure du projet

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

## 📋 Prérequis

- **Node.js 20+**
- **Yarn** ou **npm**
- **API Backend** : [jess-api](https://github.com/argomis/jess-api) doit être démarrée

## 🛠️ Installation et configuration

### Développement local

1. **Cloner et installer**
```bash
git clone git@github-argomis:argomis/jess-front.git
cd jess-front
yarn install
```

2. **Configurer l'environnement**
```bash
cp .env.example .env
```

Fichier `.env` :
```env
VITE_API_URL=http://localhost:3001/api
```

3. **Lancer le serveur**
```bash
yarn dev
```

### 🐳 Avec Docker (Alternative)

```bash
# Démarrer
yarn docker:dev

# Arrêter
yarn docker:dev-down

# Voir les logs
yarn docker:dev-logs
```

## 🎮 Scripts disponibles

### Développement
- `yarn dev` - Serveur de développement (http://localhost:5173)
- `yarn build` - Build de production
- `yarn preview` - Prévisualiser le build
- `yarn lint` - Vérifier le code avec ESLint
- `yarn format` - Formater avec Prettier
- `yarn format:check` - Vérifier le formatage

### Docker
- `yarn docker:dev` - Démarrer en mode développement
- `yarn docker:dev-down` - Arrêter les conteneurs
- `yarn docker:dev-logs` - Voir les logs
- `yarn docker:build` - Build l'image de production
- `yarn docker:up` - Démarrer en production
- `yarn docker:down` - Arrêter la production

## 🔗 Communication avec l'API

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

## ✨ Fonctionnalités

- ✅ Page d'accueil avec présentation professionnelle
- ✅ Page prestations avec FAQ détaillée
- ✅ Formulaire de contact avec validation
- ✅ Visionneuse d'images interactive
- ✅ Navigation responsive
- ✅ Mentions légales conformes RGPD
- ✅ Intégration API pour sauvegarde contacts

## 🚢 Déploiement

### Build de production
```bash
yarn build
```

Les fichiers optimisés seront dans `dist/`

### Docker production
```bash
yarn docker:build
yarn docker:up
```

## 🔗 Liens utiles

- **API Backend** : [jess-api](https://github.com/argomis/jess-api)
- **Backoffice** : [jess-bo](https://github.com/argomis/jess-bo)
- **Documentation complète** : Voir le repository principal

## 📄 Licence

ISC
