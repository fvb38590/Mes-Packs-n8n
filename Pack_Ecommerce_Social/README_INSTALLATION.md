# Pack E-commerce & Social Media — Installation

Installation et configuration du pack `Pack_Ecommerce_Social`.

## Description

Ce pack reçoit des avis clients (webhook), utilise un agent IA pour rédiger un post social média optimisé, et stocke le post généré dans Google Sheets en attente de validation.

## Étapes d'installation

1. Importer le workflow `Pack_Ecommerce_Social/workflow_base.json` dans n8n (Menu > Import)

2. Configurer les credentials dans n8n :
   - OpenAI : clé via `OPENAI_API_KEY` (variables d'environnement ou credential n8n)
   - Google Sheets : OAuth2 configuré et `GOOGLE_SHEETS_ID` défini en variable d'environnement

3. Vérifier les variables d'environnement sur l'instance n8n :
   - `OPENAI_API_KEY`
   - `GOOGLE_SHEETS_API` (nom du credential Google dans n8n)
   - `GOOGLE_SHEETS_ID` (ID du spreadsheet)

4. Importer ou créer la feuille `Pending Posts` avec en-têtes : `name`, `product`, `rating`, `originalComment`, `postText`, `suggestedPlatforms`, `dateAdded`

5. Tester le webhook localement :

```bash
curl -X POST https://<your-n8n-host>/webhook/review-intake \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Alice","lastName":"Dupont","product":"Montre X","rating":5,"comment":"Très satisfait !"}'
```

6. Contrôler la feuille Google Sheets pour vérifier l'entrée `Pending Posts` et valider/modifier le post avant publication.

## Bonnes pratiques

- Ne pas hard-coder les clés API.
- Tester en environnement `staging` avant `production`.
- Ajuster le `prompt` OpenAI pour le ton et la longueur requis.
