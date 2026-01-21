# 📌 Cahier des Charges – ADHD Insight Platform
**Plateforme intelligente multi-modale pour l’analyse, le suivi et l’aide à la décision autour de l’ADHD**

---

## 1. Contexte & Problématique
Le Trouble du Déficit de l’Attention avec ou sans Hyperactivité (**ADHD/TDAH**) est un trouble neuro-développemental fréquent, complexe et hétérogène.  
Il peut impacter fortement :

- la performance académique (GPA, concentration, adaptation universitaire),
- la santé mentale (stress, anxiété, dépression),
- la qualité de vie, l’organisation et la productivité,
- le sommeil, l’activité physique et les habitudes quotidiennes.

Les données liées à l’ADHD sont souvent **fragmentées** (tests cognitifs, questionnaires, signaux biométriques, textes, EEG, imagerie).  
Il manque une solution web unifiée capable de :

✅ centraliser les données,  
✅ analyser l’évolution des symptômes,  
✅ produire des résultats exploitables et explicables,  
✅ proposer des recommandations personnalisées,  
✅ accompagner le suivi longitudinal.

---

## 2. Objectifs du Projet

### 2.1 Objectif Principal
Développer une plateforme web basée sur l’IA (**ADHD Insight Platform**) permettant :

- l’analyse multi-modale des données ADHD,
- l’estimation du risque ADHD (screening / orientation),
- le suivi des symptômes dans le temps,
- la visualisation des résultats via dashboards,
- la génération de recommandations personnalisées,
- l’aide à la décision (mode pro/recherche) avec IA explicable.

### 2.2 Objectifs Secondaires
- Générer des rapports exportables (PDF / CSV)
- Offrir un outil moderne et responsive (desktop + mobile)
- Respecter la sécurité et l’éthique (RGPD, anonymisation)
- Déployer la plateforme en production (Docker + cloud)

---

## 3. Utilisateurs Cibles & Rôles

### 3.1 Patient / Étudiant
- répondre à des tests/questionnaires
- suivre son état (stress, sommeil, concentration)
- visualiser sa progression
- recevoir des recommandations

### 3.2 Professionnel / Chercheur
- analyser des cohortes (ADHD vs control)
- visualiser des statistiques
- explorer des résultats IA
- comprendre les explications (XAI)

### 3.3 Administrateur
- gérer les comptes utilisateurs
- gérer les datasets et accès
- gérer la supervision des modèles IA (versioning, monitoring)

---

## 4. Périmètre Fonctionnel

### 4.1 Authentification & Sécurité
**Fonctions**
- inscription / connexion (email + mot de passe)
- rôles : user / professional / admin
- JWT + refresh tokens
- récupération mot de passe
- changement mot de passe
- validation email (optionnel)

**Contraintes**
- mot de passe fort
- protection endpoints privés
- rate limiting (anti brute force)

---

### 4.2 Gestion du Profil
**Fonctions**
- informations utilisateur (âge, sexe, objectif)
- préférences (notifications, langue)
- historique des scores & journaux

---

### 4.3 Ingestion des Données
#### A) Données tabulaires (CSV)
- upload CSV (GPA, scores, symptômes)
- nettoyage et validation (types, colonnes attendues)
- mapping automatique des colonnes

#### B) Texte (journal / posts)
- texte libre + date
- analyse NLP (sentiment, stress, thèmes)

#### C) Signaux (HRV / activité / sommeil)
- import depuis CSV / API wearable (optionnel)
- normalisation des séries

#### D) EEG (mode recherche)
- import EEG (prétraité ou brut)
- extraction features et classification

#### E) MRI 3D (mode recherche)
- upload NIfTI (.nii)
- inference classification ADHD vs Control (modèle 3D CNN)

---

### 4.4 Module IA – Analyse Automatique
Chaque modalité possède son pipeline :

✅ Tabulaire → XGBoost / MLP  
✅ Texte → BERT / Transformers  
✅ Activité/HRV → LSTM / GRU  
✅ EEG → CNN1D/LSTM  
✅ MRI → CNN 3D  

**Sorties attendues**
- score global ADHD
- probabilité (0–100%)
- niveau de confiance
- explication (XAI)

---

### 4.5 Fusion Multi-Modale (Version avancée)
**Objectif**
Fusionner plusieurs modalités pour un score final plus robuste.

**Approche**
- extraction de features par modalité
- concaténation features
- modèle final (MLP ou Transformer fusion)

---

### 4.6 Dashboard Interactif
**Pages principales**
- Tableau de bord général
- Tests cognitifs
- Activité & rythme
- Recommandations
- Rapports
- Paramètres

**Graphiques**
- score ADHD global
- évolution weekly/monthly
- comparaisons semaine précédente
- indicateurs sommeil / activité / stress
- performances tests cognitifs

---

### 4.7 Recommandations Personnalisées
**Recommandations proposées**
- routines de sommeil
- techniques de concentration (Pomodoro, planification)
- gestion du stress (respiration, organisation)
- conseils académiques
- activités cognitives

**Moteur**
- règles (Phase 1)
- modèle ML simple ou scoring (Phase 2)

---

### 4.8 Rapports & Export
**Exports**
- PDF (rapport hebdomadaire / mensuel)
- CSV des données
- résumé “insights”

---

## 5. Datasets Utilisés (Recherche)
| Dataset | Modalité | Usage |
|--------|----------|-------|
| EEG ADHD (IEEE) | Time-series | ADHD vs Control |
| GPA + ADHD (UCT) | Tabulaire | Performance & risk |
| Reddit ADHD (Kaggle) | Texte | Stress/sentiment |
| HYPERAKTIV (Physionet) | HRV / activité | Monitoring |
| ADHD200 | MRI 3D | Research classification |

---

## 6. Architecture Technique

### 6.1 Frontend
- Next.js + TypeScript
- TailwindCSS + Shadcn UI
- Dashboard / Charts (Recharts)
- Responsive UI

### 6.2 Backend API
Option recommandée :
✅ **FastAPI (Python)** pour IA + REST

Fonctions backend :
- authentication
- upload files
- endpoints prediction
- stockage des résultats
- export PDF

### 6.3 Base de Données
Recommandé :
✅ PostgreSQL

Tables principales :
- users
- roles
- assessments
- symptom_logs
- recommendations
- reports
- uploads
- model_runs

---

## 7. Sécurité & Éthique
✅ anonymisation des données  
✅ consentement utilisateur  
✅ RGPD  
✅ chiffrement données sensibles  
✅ transparence : pas de diagnostic médical automatique  

---

## 8. Contraintes Non Fonctionnelles
- UI rapide et accessible
- temps réponse inference < 2s (si possible)
- compatibilité mobile + desktop
- logs & monitoring
- versioning modèles

---

## 9. Livrables
✅ application web fonctionnelle  
✅ API documentée (Swagger)  
✅ modèles IA entraînés + notebooks  
✅ dashboards interactifs  
✅ documentation projet  
✅ rapport final (scientifique + technique)

---

## 10. Roadmap
### Phase 1 (MVP)
- Auth + dashboard UI
- questionnaire + score basique
- recommandations rule-based
- export PDF simple

### Phase 2 (AI)
- tabulaire XGBoost + SHAP
- NLP (stress/sentiment)
- time-series HRV (LSTM/GRU)

### Phase 3 (Full Multi-modal)
- EEG + MRI models
- fusion multi-modale
- MLOps monitoring
