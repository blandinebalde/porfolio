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

## 📧 Configuration du formulaire de contact (EmailJS)

Le formulaire de contact utilise EmailJS pour envoyer les emails directement à `blandinebalde@gmail.com`.

### Configuration locale (développement)

1. Créez un compte sur [EmailJS](https://www.emailjs.com/) (gratuit jusqu'à 200 emails/mois)
2. Créez un service email (Gmail recommandé) et connectez votre compte
3. Créez un template email avec ces variables :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Message
   - `{{to_email}}` - Email de destination (blandinebalde@gmail.com)
4. Créez un fichier `.env` à la racine du projet :
   ```env
   VITE_EMAILJS_SERVICE_ID=votre_service_id
   VITE_EMAILJS_TEMPLATE_ID=votre_template_id
   VITE_EMAILJS_PUBLIC_KEY=votre_public_key
   ```

### Configuration pour GitHub Pages (production)

Pour que le formulaire fonctionne sur GitHub Pages, vous devez configurer les secrets GitHub :

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret** et ajoutez ces 3 secrets :
   - `VITE_EMAILJS_SERVICE_ID` : Votre Service ID
   - `VITE_EMAILJS_TEMPLATE_ID` : Votre Template ID
   - `VITE_EMAILJS_PUBLIC_KEY` : Votre Public Key

4. Après avoir ajouté les secrets, le workflow GitHub Actions utilisera automatiquement ces valeurs lors du build

**Note** : Si EmailJS n'est pas configuré, le formulaire utilisera automatiquement un lien mailto comme solution de secours.
