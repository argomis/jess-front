# Jess - Front

Je souhaite créer un front web qui communiquera avec un n8n via des webhooks.
Je souhaite la stack technique suivante :

- ReactJS
- Vite
- TypeScript
- Yarn
- Zustand
- React router DOM
- ky
- Prettier
- SCSS

Je veux la structure suivante :

```text
src/
├── api/
├── assets/           # Images, icônes, etc.
├── components/
│   ├── myComponent/
│   │   ├── MyComponent.tsx
│   │   ├── MyComponent.scss
│   │   └── index.ts
│   └── ...
├── pages/
│   ├── myPage/
│   │   ├── MyPage.tsx
│   │   ├── MyPage.scss
│   │   ├── MyPageComponent.tsx
│   │   ├── MyPageComponent.scss
│   │   └── index.ts
│   └── ...
├── router/
├── services/
├── stores/           # Store Zustand global
├── hooks/            # Hooks personnalisés
├── types/            # Types TypeScript globaux
├── constants/        # Constantes de l'app
├── styles/
│   ├── global.scss
│   ├── utilities.scss
│   └── variables.scss
├── utils/
└── main.tsx
```

Je veux la configuration Prettier suivante :

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "bracketSameLine": true,
  "jsxSingleQuote": true,
  "printWidth": 160,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "parser": "babel-ts",
  "overrides": [
    {
      "files": ["*.json"],
      "options": {
        "parser": "json"
      }
    },
    {
      "files": ["*.scss"],
      "options": {
        "parser": "scss"
      }
    },
    {
      "files": ["*.html"],
      "options": {
        "parser": "html"
      }
    },
    {
      "files": ["*.yml"],
      "options": {
        "parser": "yaml"
      }
    },
    {
      "files": ["*.md"],
      "options": {
        "parser": "markdown"
      }
    }
  ]
}
```

Avant d'implementer cela donne moi ton avis sur la structure, une fois qu'on l'aura validée je te dirais avant de passer à l'imprementation