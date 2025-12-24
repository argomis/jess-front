# 📋 Variables GitHub Actions - jess-front

## 🔧 Variables (non sensibles)

Dans `Settings > Secrets and variables > Actions > Variables`, créer :

| Nom | Valeur | Description |
|-----|---------|-------------|
| `DOMAIN` | `jessica-feder.com` | Domaine principal |
| `SERVER_HOST` | `[IP_VPS]` | IP ou domaine du VPS |
| `SERVER_USERNAME` | `debian` | User SSH |
| `SERVER_PORT` | `22` | Port SSH |
| `DOCKER_COMPOSE_PATH` | `/home/debian/jess/front/production` | Chemin sur le VPS |

**Total : 5 variables**

## 🔐 Secrets (sensibles)

Dans `Settings > Secrets and variables > Actions > Secrets`, créer :

| Nom | Description |
|-----|-------------|
| `SSH_KEY` | Clé privée SSH (même que pour jess-api et jess-bo) |

**Total : 1 secret**

## ✅ Checklist

### Variables créées : 5
- [ ] `DOMAIN`
- [ ] `SERVER_HOST`
- [ ] `SERVER_USERNAME`
- [ ] `SERVER_PORT`
- [ ] `DOCKER_COMPOSE_PATH`

### Secrets créés : 1
- [ ] `SSH_KEY`

## 🚀 Déploiement

Une fois les variables configurées, créer un tag pour déployer :

```bash
git tag v1.0.0
git push origin v1.0.0
```

Le frontend sera accessible sur `https://jessica-feder.com` et `https://www.jessica-feder.com`
