# Newsletter Page Implementation

## Description

Ce projet consiste en l'implémentation d'une page de newsletter dans une application Next.js. La page est responsive, utilise TypeScript pour assurer la sécurité des types et simule la récupération des données avec un rendu côté serveur (SSR). L'objectif est de présenter une liste de newsletters regroupées par site, avec des appels à l'action (CTA) dynamiques en fonction de l'état de l'utilisateur (abonné ou non).

## Fonctionnalités

### 1. **Design Responsive**
La page est entièrement responsive et s'adapte à différentes tailles d'écran grâce à l'utilisation de `styled-components` pour un style modulaire et maintenable.

### 2. **Affichage des Newsletters**
Les newsletters sont affichées dans une liste, regroupées par leur site d'origine. Les données proviennent d'une source de données simulée, représentant un comportement d'API.

### 3. **CTA Dynamique**
Le bouton d'appel à l'action pour chaque newsletter varie en fonction de l'abonnement de l'utilisateur :
- Si l'utilisateur possède l'abonnement approprié, le bouton affiche "S'inscrire".
- Si l'utilisateur n'a pas accès à la newsletter, le bouton affiche "S'abonner".

Cette fonctionnalité est gérée par le champ `subscriptions` dans les données simulées et l'état de l'utilisateur.

### 4. **Simulation des Données**
Les newsletters et les utilisateurs sont simulés à l'aide de données fictives. L'état de l'utilisateur est géré pour représenter trois types de profils :
- `USER_WITH_ONE_SUBSCRIPTION`
- `USER_WITH_MULTIPLE_SUBSCRIPTION`
- `USER_WITHOUT_SUBSCRIPTION`

Chaque type d'utilisateur a un ensemble différent d'abonnements actifs, et le CTA s'adapte en fonction de cet état.

### 5. **Rendu Côté Serveur (SSR)**
La page utilise le rendu côté serveur de Next.js pour pré-rendre les newsletters avec les données, afin d'assurer une meilleure performance et des avantages SEO.

### 6. **Sécurité des Types avec TypeScript**
Tout le projet utilise TypeScript pour garantir la sécurité des types. Les profils utilisateurs, les newsletters et les fonctions qui gèrent les abonnements sont tous typés pour améliorer l'expérience de développement.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone <url_du_dépôt>
2- npm install
3- npm run dev
4- L'application sera disponible à l'adresse suivante : http://localhost:3000

### 7. Approche pour les Tâches Non Terminées
Si j'avais plus de temps, je :
Ajouterais des tests unitaires et d'intégration pour valider les composants et la logique métier.

### 8.Structure du Projet
frontend-test/
│
├── src/
│   ├── app/
│   │   ├── components/                    # Composants réutilisables
│   │   │   ├── Divider.tsx                # Composant de séparation
│   │   │   ├── Header.tsx                 # Composant d'en-tête
│   │   │   ├── NewsletterCard.tsx         # Composant de carte de newsletter
│   │   │   ├── NewsletterSection.tsx      # Composant pour la section des newsletters
│   │   ├── lib/                           # Bibliothèque de fonctions utilitaires
│   │   │   ├── fetchNewsletters.ts        # Fonction pour récupérer les newsletters
│   │   │   ├── fetchUser.ts               # Fonction pour récupérer les utilisateurs
│   │   ├── styles/                        # Dossier des styles
│   │   │   ├── globalStyles.ts            # Fichier de styles globaux
│   │   ├── types/                         # Types TypeScript
│   │   │   ├── newsletter.ts              # Type pour les newsletters
│   │   │   ├── user.ts                    # Type pour les utilisateurs
│   ├── mocks/                             # Dossier pour les données simulées
│   │   ├── newsletters.ts                 # Données simulées pour les newsletters
│   │   ├── user.ts                        # Données simulées pour les utilisateurs
│   ├── page.tsx                           # Page principale du projet
│   ├── layout.tsx                         # Layout principal de l'application
│   ├── StyledComponentsRegistry.tsx       # Enregistrement des styled-components
│
├── tsconfig.json                          # Configuration TypeScript
├── package.json                           # Dépendances et scripts du projet
└── README.md                              # Documentation du projet
