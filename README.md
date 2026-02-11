# Collection de workflows n8n premium

Collection de workflows n8n premium pour l'automatisation des processus métiers et la qualification de leads.

## Description

Collection de workflows n8n premium pour recevoir, analyser et traiter des leads, intégrer des agents IA, et stocker les résultats dans des destinations externes (Google Sheets, CRM, etc.). Conçue pour être réutilisable et sécurisée grâce à l'utilisation de variables d'environnement et de bonnes pratiques de structuration.

## Packs disponibles

- **Pack Immobilier Pro**
  - Workflow complet pour la qualification des leads immobiliers : réception via Webhook, parsing, qualification par IA (Chaud/Froid), enregistrement dans Google Sheets (Leads qualifiés / Leads froids) et réponse au webhook.

(À venir : autres packs…)

## Prérequis

- n8n (version compatible avec les nodes utilisés)
- Clés API dans les variables d'environnement : `OPENAI_API_KEY`, `GOOGLE_SHEETS_API`, `GOOGLE_SHEETS_ID`

## Installation rapide

1. Importer `Pack_Immo_Pro/workflow_base.json` dans n8n
2. Configurer les credentials (OpenAI, Google Sheets) dans n8n
3. Définir les variables d'environnement requises

## Contribution

Proposez des améliorations via des PRs ou ouvrez des issues pour les bugs/feature requests.
