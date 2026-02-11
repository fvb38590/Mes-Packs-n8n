# Pack E-commerce Pro — Installation

## Description

Pack E-commerce Pro transforme les avis clients en posts sociaux automatisés optimisés pour LinkedIn, Instagram et Twitter, avec archivage dans Google Sheets.

## Installation n8n

### 1. Prérequis

- Instance n8n configurée et accessible
- Clé API OpenAI (`OPENAI_API_KEY`)
- Credential Google Sheets OAuth2 configuré
- ID du spreadsheet Google Sheets (`GOOGLE_SHEETS_ID`)

### 2. Import du workflow

1. Ouvrir Menu > Import from URL/File
2. Charger le fichier `Pack_Ecommerce_Pro/n8n/workflow.json`
3. Confirmer l'import

### 3. Configuration des credentials

Dans n8n, ajouter / vérifier les variables d'environnement :

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
GOOGLE_SHEETS_API=google-oauth2-credential-name
GOOGLE_SHEETS_ID=1A2B3C4D5E6F7G8H9I0J
```

### 4. Configuration du spreadsheet

Créer une feuille `Generated Posts` avec en-têtes :
- customerName
- originalReview
- rating
- platform
- generatedPost
- hashtags
- callToAction
- timestamp

### 5. Test du webhook

```bash
curl -X POST https://your-n8n-instance.com/webhook/ecommerce-pro/review \
  -H "Content-Type: application/json" \
  -d '{
    "customerName": "Jean Dupont",
    "reviewText": "Excellent produit, très satisfait de la qualité",
    "rating": 5,
    "platformTarget": "linkedin"
  }'
```

Réponse attendue :
```json
{
  "success": true,
  "postId": "xyz",
  "platform": "linkedin"
}
```

### 6. Activation du workflow

Cliquer sur le switch "Active" dans le coin supérieur droit du workflow.

---

## Installation ByteChef

### 1. Prérequis

- Instance ByteChef configurée
- Clé API OpenAI (`OPENAI_API_KEY`)
- Google Sheets connector activé et configuré
- ID du spreadsheet Google Sheets (`GOOGLE_SHEETS_ID`)

### 2. Import du workflow

1. Ouvrir Workflows > Create New
2. Importer `Pack_Ecommerce_Pro/bytechef/workflow.json`
3. Confirmer

### 3. Configuration des variables d'environnement

Dans les paramètres d'instance ByteChef :

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
GOOGLE_SHEETS_ID=1A2B3C4D5E6F7G8H9I0J
GOOGLE_SHEETS_API=your-google-service-account-json
```

### 4. Activation et test

1. Cliquer sur "Activate Workflow"
2. Récupérer l'URL du webhook
3. Tester avec curl (même requête que n8n ci-dessus)

---

## Bonnes pratiques

- ✅ Ne jamais commit les API keys (utiliser `.env`)
- ✅ Tester en staging avant production
- ✅ Monitorer les erreurs OpenAI (tokens, rate limits)
- ✅ Vérifier les droits d'accès Google Sheets
- ✅ Adapter le prompt OpenAI selon le tone/secteur
- ❌ Éviter les hard-coded credentials

## Support

Pour les issues :
1. Vérifier les logs du webhook (n8n: Executions, ByteChef: Activity)
2. Tester la connexion OpenAI indépendamment
3. Vérifier les permissions Google Sheets
