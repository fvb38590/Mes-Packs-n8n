---
name: scraper-web-universel
description: Skill pour extraire, analyser et résumer le contenu d'une URL.
---


## Description
À utiliser lorsque l'utilisateur demande d'extraire, d'analyser ou de résumer le contenu d'une URL spécifique (ex: articles de blog, Reddit, pages d'actualités).

## Instructions Techniques
- **Langage** : Python.
- **Bibliothèques** : Utiliser `requests` et `BeautifulSoup` par défaut. Si le site est dynamique (JavaScript), utiliser `Playwright`.
- **Format de sortie** : Présenter les données extraites sous forme de liste à puces ou de tableau Markdown.

## Actions Automatiques
1. Vérifier si l'URL est accessible.
2. Exécuter le script `scraper.py` (stocké dans les ressources de ce skill) pour récupérer le texte brut.
3. Nettoyer les balises HTML inutiles avant de présenter

---

## Best Practices n8n

### 1. Nommage des Nodes
- **Convention claire et descriptive** : Utiliser des noms explicites en anglais ou français
  - ✅ `Webhook - Receive Lead Data`
  - ✅ `Filter Hot Leads`
  - ❌ `webhook1` ou `filter`
  
- **Préfixer par l'action** : `Verbe - Objet`
  - `Parse Lead Data`
  - `Save to Google Sheets`
  - `Send Notification`

### 2. Gestion des Erreurs

#### Try-Catch Pattern
```json
{
  "node": "Error Handler",
  "type": "n8n-nodes-base.ifError",
  "parameters": {
    "errorHandling": "stop",
    "errorOutput": "error"
  }
}
```

#### Stratégies recommandées :
- **Continue on Error** : Pour les nodes non-critiques (notifications)
- **Stop Workflow** : Pour les nodes critiques (sauvegarde données)
- **Wait & Retry** : Pour les appels API fragiles (avec max 3 tentatives)

### 3. Variables d'Environnement
Toujours utiliser des variables d'environnement pour les données sensibles :
```json
{
  "credentials": {
    "openAiApi": "={{$env.OPENAI_API_KEY}}",
    "googleSheetsOAuth2Api": "={{$env.GOOGLE_SHEETS_API}}"
  }
}
```

### 4. Data Transformation
- Utiliser **Set node** pour transformer les données explicitement
- Documentez les formats attendus avec des commentaires
- Validez les types de données avant les étapes critiques

#### Exemple :
```json
{
  "name": "Parse Lead Data",
  "description": "Transforme les données du formulaire au format RealEstateLead",
  "parameters": {
    "values": {
      "string": [
        {"name": "nom", "value": "={{$json.firstName}} {{$json.lastName}}"}
      ],
      "number": [
        {"name": "budget", "value": "={{$json.budgetMax || 0}}"}
      ]
    }
  }
}
```

### 5. Gestion du Flux de Données
- **Filter nodes** : Créer des branches (hot/cold leads)
- **Switch nodes** : Pour la logique conditionnelle complexe
- **Wait nodes** : Ajouter des délais entre les appels APIs

### 6. Performance & Limites
- **Batch operations** : Utiliser le mode batch pour Google Sheets (max 200 rows/batch)
- **Rate limiting** : Respecter les limites des APIs externes
- **Timeout** : Définir des timeouts explicites (30s par défaut)

### 7. Monitoring & Debugging
- Activer **Save Execution Progress** pour les workflows longs
- Utiliser **Logs** nodes pour tracer les données critiques
- Tester avec des données réelles (env dev/staging)

### 8. Workflow Structure
```
Trigger (Webhook) 
  → Parse/Validate Data
    → Business Logic (AI, Filters)
      → Save/Notify
        → Response
```

### 9. Sécurité
- ✅ Valider toutes les inputs (email, phone format)
- ✅ Sanitizer les données avant Google Sheets
- ❌ Ne jamais hard-coder les API keys
- ❌ Ne pas exposer les erreurs sensibles au client

### 10. Template Webhook Recommandé
```json
{
  "name": "Webhook - [Resource]",
  "type": "n8n-nodes-base.webhook",
  "parameters": {
    "path": "api/v1/[resource]",
    "httpMethod": "POST",
    "responseMode": "onReceived"
  }
}
```