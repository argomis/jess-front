# Configuration Google Maps API

## Étapes pour obtenir votre clé API Google Maps

### 1. Créer un compte Google Cloud Platform

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Connectez-vous avec votre compte Google
3. Acceptez les conditions d'utilisation

### 2. Créer un nouveau projet

1. Cliquez sur le sélecteur de projet en haut
2. Cliquez sur "Nouveau projet"
3. Donnez un nom au projet (ex: "Jessica-Feder-Website")
4. Cliquez sur "Créer"

### 3. Activer l'API Maps Static

1. Dans le menu ☰ à gauche, allez dans "APIs et services" > "Bibliothèque"
2. Recherchez "Maps Static API"
3. Cliquez sur "Maps Static API"
4. Cliquez sur "Activer"

### 4. Créer une clé API

1. Dans le menu ☰ à gauche, allez dans "APIs et services" > "Identifiants"
2. Cliquez sur "+ CRÉER DES IDENTIFIANTS" en haut
3. Sélectionnez "Clé API"
4. Une clé API sera générée (exemple: `AIzaSyXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX`)
5. **Important** : Cliquez sur "Restreindre la clé" pour la sécuriser

### 5. Configurer les restrictions (IMPORTANT)

Pour éviter toute utilisation frauduleuse :

#### Restrictions d'application
1. Sélectionnez "Restrictions de sites web"
2. Ajoutez vos domaines autorisés :
   - `https://jessica-feder.com/*`
   - `http://localhost:5173/*` (pour le développement local)

#### Restrictions d'API
1. Sélectionnez "Restreindre la clé"
2. Choisissez "Maps Static API"
3. Sauvegardez

### 6. Configurer la facturation (OBLIGATOIRE mais gratuit)

**Note** : Google nécessite une carte bancaire mais vous ne serez PAS facturé grâce au crédit gratuit de 200$/mois

1. Dans le menu ☰, allez dans "Facturation"
2. Cliquez sur "Créer un compte de facturation"
3. Remplissez les informations
4. Ajoutez une carte bancaire (pour vérification uniquement)
5. Activez le compte

### 7. Ajouter la clé dans votre projet (Environnement local uniquement)

**IMPORTANT** : Le fichier `.env` ne doit JAMAIS être commité sur GitHub. Il est dans `.gitignore`.

1. Créez un fichier `.env` dans `jess-front/` (si inexistant)
2. Ajoutez votre clé :
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX
   ```
3. Sauvegardez le fichier
4. Redémarrez le serveur de développement

**Pour la production** : La clé API est injectée automatiquement via GitHub Actions depuis les secrets du repository. Ne PAS mettre la clé dans `.env.production`.

### 8. Vérifier que ça fonctionne

1. Allez sur votre site en local
2. La carte devrait s'afficher avec les cercles de 20km et 50km autour de Rixheim
3. Si vous voyez "For development purposes only", c'est normal en local sans restrictions

## Coûts et limites

- **Crédit mensuel gratuit** : 200 $ / mois
- **Coût Maps Static API** : 2 $ pour 1000 chargements
- **Équivalent gratuit** : ~100 000 chargements / mois
- **Pour votre site** : Largement suffisant, restera gratuit

## Surveillance de l'utilisation

1. Dans Google Cloud Console, menu ☰
2. "APIs et services" > "Tableau de bord"
3. Vous verrez le nombre de requêtes par jour

## En cas de problème

### La carte ne s'affiche pas
- Vérifiez que la clé API est bien dans le `.env`
- Vérifiez que vous avez redémarré le serveur après modification du `.env`
- Vérifiez que l'API Maps Static est activée
- Regardez la console du navigateur pour les erreurs

### Message d'erreur "API key not valid"
- Vérifiez que vous avez activé la facturation
- Vérifiez que Maps Static API est bien activé
- Attendez quelques minutes (propagation de la clé)

### Image avec filigrane "For development purposes only"
- Cela signifie que la facturation n'est pas activée
- Ou que les restrictions de domaine bloquent localhost
- Ajoutez `http://localhost:5173/*` dans les restrictions

## Production

Pour le déploiement en production :

1. La clé API Google Maps est déjà configurée dans les **GitHub Secrets** du repository

2. GitHub Actions injecte automatiquement `VITE_GOOGLE_MAPS_API_KEY` lors du build

3. **Ne JAMAIS** commiter le fichier `.env` sur GitHub (il est dans `.gitignore`)

4. Pour ajouter/modifier la clé en production :
   - Allez dans Settings > Secrets and variables > Actions
   - Ajoutez ou modifiez le secret `VITE_GOOGLE_MAPS_API_KEY`

5. Assurez-vous que votre domaine de production est dans les restrictions de la clé API Google
