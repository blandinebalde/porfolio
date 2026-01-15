# Portfolio - Blandine

Portfolio personnel avec CV intégré et système de traduction (Français/Anglais).

## 🚀 Technologies utilisées

- React 18
- Vite
- i18next pour la traduction
- CSS moderne avec gradients et animations

## 📦 Installation

```bash
npm install
```

## 🏃 Démarrage

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🏗️ Build pour production

```bash
npm run build
```

## 📁 Structure du projet

```
porfolio/
├── src/
│   ├── components/       # Composants React
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── LanguageSwitcher.jsx
│   ├── locales/          # Fichiers de traduction
│   │   ├── fr.json
│   │   └── en.json
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── i18n.js
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ Personnalisation

Pour personnaliser votre CV :

1. **Modifier les traductions** : Éditez les fichiers dans `src/locales/fr.json` et `src/locales/en.json`
2. **Modifier les styles** : Ajustez les fichiers CSS dans `src/components/` et `src/App.css`
3. **Ajouter des sections** : Créez de nouveaux composants dans `src/components/`

## 🌐 Traduction

Le système de traduction utilise i18next. Pour ajouter une nouvelle langue :

1. Créez un nouveau fichier dans `src/locales/` (ex: `es.json`)
2. Ajoutez la langue dans `src/i18n.js`
3. Ajoutez un bouton dans `LanguageSwitcher.jsx`

## 🚀 Déploiement sur GitHub Pages

### Prérequis
- Un compte GitHub
- Le projet déjà initialisé avec Git

### Étapes de déploiement

1. **Créer un dépôt GitHub** (si ce n'est pas déjà fait) :
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/porfolio.git
   ```

2. **Pousser le code sur GitHub** :
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin master
   ```

3. **Configurer GitHub Pages** :
   - Allez sur votre dépôt GitHub
   - Cliquez sur **Settings** → **Pages**
   - Dans **Source**, sélectionnez **GitHub Actions**
   - Le workflow se déclenchera automatiquement à chaque push sur la branche `master`

4. **Important** : Si votre dépôt ne s'appelle pas `porfolio`, modifiez le `base` dans `vite.config.js` :
   ```js
   base: process.env.NODE_ENV === 'production' ? '/NOM_DE_VOTRE_REPO/' : '/',
   ```

5. **Votre site sera accessible à** :
   - `https://VOTRE_USERNAME.github.io/porfolio/` (si le repo s'appelle `porfolio`)
   - `https://VOTRE_USERNAME.github.io/` (si le repo s'appelle `VOTRE_USERNAME.github.io`)

### Déploiement automatique

Le workflow GitHub Actions (`.github/workflows/deploy.yml`) se déclenche automatiquement à chaque push sur `master` ou `main`. Le site sera mis à jour automatiquement après chaque commit.
