# Pack Immobilier Pro — Installation

## Description

Pack Immobilier Pro qualifie automatiquement les leads immobiliers via une IA qui attribue un score de 1-10 basé sur le budget, le type de bien et l'urgence. Tri automatique par priorité dans Google Sheets.

## Installation n8n

### 1. Prérequis

- Instance n8n configurée et accessible
- Clé API OpenAI (`OPENAI_API_KEY`)
- Credential Google Sheets OAuth2 configuré
- ID du spreadsheet Google Sheets (`GOOGLE_SHEETS_ID`)

### 2. Import du workflow

1. Ouvrir Menu > Import from URL/File
2. Charger le fichier `Pack_Immobilier_Pro/n8n/workflow.json`
3. Confirmer l'import

### 3. Configuration des variables d'environnement

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
GOOGLE_SHEETS_API=google-oauth2-credential-name
GOOGLE_SHEETS_ID=1A2B3C4D5E6F7G8H9I0J
```

### 4. Configuration du spreadsheet

Créer une feuille `Leads Scores` avec en-têtes :
- clientName
- propertyType
- budget
- isUrgent
- scoreIA
- raison
- priorite
- dateAdded

### 5. Test du webhook

```bash
curl -X POST https://your-n8n-instance.com/webhook/immobilier-pro/lead \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Jean Martin",
    "propertyType": "maison",
    "budget": 350000,
    "isUrgent": true
  }'
```

Réponse attendue :
```json
{
  "success": true,
  "scoreIA": 8,
  "priorite": "haute"
}
```

### 6. Activation du workflow

Cliquer sur le switch "Active" dans le coin supérieur droit.

---

## Installation ByteChef

### 1. Prérequis

- Instance ByteChef configurée
- Clé API OpenAI (`OPENAI_API_KEY`)
- Google Sheets connector activé et configuré
- ID du spreadsheet Google Sheets (`GOOGLE_SHEETS_ID`)

### 2. Import du workflow

1. Ouvrir Workflows > Create New
2. Importer `Pack_Immobilier_Pro/bytechef/workflow.json`
3. Confirmer

### 3. Configuration des variables d'environnement

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
GOOGLE_SHEETS_ID=1A2B3C4D5E6F7G8H9I0J
GOOGLE_SHEETS_API=your-google-credentials
```

### 4. Activation et test

1. Cliquer sur "Activate Workflow"
2. Récupérer l'URL du webhook
3. Tester avec curl (même requête que n8n ci-dessus)

---

## Critères de scoring IA

| Catégorie | Points | Critères |
|-----------|--------|----------|
| Budget | 0-3 | <100k (0), 100-200k (1), 200-500k (2), >500k (3) |
| Type | 0-3 | Terrain (0), Commerce (1), Bureau/Apt (2), Maison/Immeuble (3) |
| Urgence | 0-4 | Non (0), Oui (4) |
| **Total** | **1-10** | **Somme des critères** |

Priorités :
- **Haute** : Score >= 7
- **Moyenne** : Score 4-6
- **Basse** : Score < 4

---

## Bonnes pratiques

- ✅ Ne jamais commit les API keys (utiliser `.env`)
- ✅ Tester en staging avant production
- ✅ Monitorer les erreurs OpenAI (tokens, rate limits)
- ✅ Vérifier les droits d'accès Google Sheets
- ✅ Adapter le scoring selon vos critères métier
- ❌ Éviter les hard-coded credentials

## Support

Pour les issues :
1. Vérifier les logs du webhook (n8n: Executions, ByteChef: Activity)
2. Tester la connexion OpenAI indépendamment
3. Vérifier les permissions Google Sheets
4. Ajuster la température OpenAI (0.3 recommandé pour scoring)
