# DiagPRO — Plateforme de révision Diagnostiqueur Immobilier

## Modules
- 🔥 **Gaz** (40 questions) — NF P 45-500, Arrêté 23/02/2018, VASO, anomalies A1/A2/DGI
- ⚡ **Électricité** (65 questions) — NF C 16-600, NF C 15-100, anomalies B1→B11
- 🪵 **Termites & Bois** (70 questions) — NF EN 335, insectes, champignons, loi termites
- 🏗️ **Amiante** (73 questions) — NF X46-020, listes A/B/C, DAPP/DTA, maladies

## Installation & démarrage

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173

## Build pour mise en ligne

```bash
npm run build
```
Le dossier `dist/` est prêt à déposer sur Vercel, Netlify ou tout hébergeur statique.

## Structure du projet

```
src/
├── main.jsx              # Point d'entrée React
├── App.jsx               # Routage entre modules
├── styles/
│   ├── global.css        # Reset + variables CSS
│   └── components.css    # Tous les styles UI
├── components/
│   ├── Navbar.jsx        # Navigation principale
│   ├── HomePage.jsx      # Page d'accueil avec cartes modules
│   ├── QuestionCard.jsx  # Carte question + options + explication
│   ├── ProgressBar.jsx   # Barre de progression
│   ├── ResultScreen.jsx  # Écran de résultats
│   └── SetupPanel.jsx    # Sélection mode + thèmes
├── modules/
│   └── ModulePage.jsx    # Page générique QCM (réutilisée par les 4 modules)
├── hooks/
│   └── useQuiz.js        # Logique QCM : état, mélange, réponses, résultats
├── data/
│   ├── questions_gaz.js
│   ├── questions_electricite.js
│   ├── questions_termites.js
│   └── questions_amiante.js
└── utils/
    ├── shuffle.js         # Algorithme Fisher-Yates
    └── stats.js           # Statistiques en localStorage
```

## Ajouter des questions

Édite uniquement le fichier `src/data/questions_xxx.js` concerné.
Format d'une question :
```js
{
  id: 99,                    // entier unique dans le module
  theme: 'reglem',           // clé du thème (doit exister dans THEMES)
  q: "Texte de la question", // HTML autorisé
  opts: ["A","B","C","D"],   // 2 à 4 options
  ans: 0,                    // index de la bonne réponse (0-based)
  exp: "Explication...",     // HTML autorisé
  // Optionnel pour questions sur image :
  img: true,
  imgDesc: `...texte ASCII...`,
  imgCap: "Légende de l'image",
}
```
# diagpro
