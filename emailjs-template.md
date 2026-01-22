# Template EmailJS pour le formulaire de contact

## Configuration du template dans EmailJS

1. Connectez-vous à votre compte [EmailJS](https://www.emailjs.com/)
2. Allez dans **Email Templates** → **Create New Template**
3. Donnez un nom à votre template (ex: "Contact Portfolio")
4. Copiez-collez le contenu ci-dessous dans le template

---

## Contenu du template

### Sujet de l'email (Subject)
```
Nouveau message depuis votre portfolio - {{subject}}
```

### Corps de l'email (Content)

**Version HTML (recommandée) :**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #0A192F;
      color: #64FFDA;
      padding: 20px;
      text-align: center;
      border-radius: 5px 5px 0 0;
    }
    .content {
      background-color: #f9f9f9;
      padding: 30px;
      border: 1px solid #ddd;
      border-top: none;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: bold;
      color: #0A192F;
      display: block;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
      padding: 10px;
      background-color: white;
      border-left: 3px solid #64FFDA;
      padding-left: 15px;
    }
    .message-box {
      background-color: white;
      padding: 15px;
      border-left: 3px solid #64FFDA;
      margin-top: 10px;
      white-space: pre-wrap;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #ddd;
      color: #666;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h2>📧 Nouveau message depuis votre portfolio</h2>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="label">👤 Nom :</span>
      <div class="value">{{from_name}}</div>
    </div>
    
    <div class="field">
      <span class="label">📧 Email :</span>
      <div class="value">{{from_email}}</div>
    </div>
    
    <div class="field">
      <span class="label">📝 Sujet :</span>
      <div class="value">{{subject}}</div>
    </div>
    
    <div class="field">
      <span class="label">💬 Message :</span>
      <div class="message-box">{{message}}</div>
    </div>
  </div>
  
  <div class="footer">
    <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
    <p>Date: {{date}}</p>
  </div>
</body>
</html>
```

**Version texte simple (alternative) :**

```
═══════════════════════════════════════════════════════
  NOUVEAU MESSAGE DEPUIS VOTRE PORTFOLIO
═══════════════════════════════════════════════════════

👤 Nom : {{from_name}}

📧 Email : {{from_email}}

📝 Sujet : {{subject}}

💬 Message :
───────────────────────────────────────────────────────
{{message}}
───────────────────────────────────────────────────────

═══════════════════════════════════════════════════════
Ce message a été envoyé depuis le formulaire de contact 
de votre portfolio.
Date: {{date}}
═══════════════════════════════════════════════════════
```

---

## Variables à utiliser dans EmailJS

Assurez-vous que votre template utilise ces variables :

- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur  
- `{{subject}}` - Sujet du message
- `{{message}}` - Message complet
- `{{to_email}}` - Email de destination (optionnel, pour référence)
- `{{date}}` - Date d'envoi (optionnel, si disponible)

---

## Configuration dans le code JavaScript

Le code dans `Contact.jsx` envoie déjà ces variables :

```javascript
{
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_email: 'blandinebalde@gmail.com'
}
```

---

## Instructions pour EmailJS

1. **Service Email** : Configurez Gmail (ou autre service) dans "Email Services"
2. **Template** : Créez le template avec le contenu ci-dessus
3. **Variables** : Les variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` seront automatiquement remplacées
4. **Test** : Utilisez la fonction "Test" dans EmailJS pour vérifier que le template fonctionne
5. **Copiez les IDs** : Une fois le template créé, copiez le Template ID et ajoutez-le dans votre fichier `.env`

---

## Exemple de rendu

L'email reçu ressemblera à ceci :

```
┌─────────────────────────────────────┐
│  📧 Nouveau message depuis votre    │
│     portfolio                       │
├─────────────────────────────────────┤
│                                     │
│  👤 Nom :                           │
│  Jean Dupont                        │
│                                     │
│  📧 Email :                         │
│  jean.dupont@example.com            │
│                                     │
│  📝 Sujet :                         │
│  Proposition de collaboration       │
│                                     │
│  💬 Message :                       │
│  Bonjour,                           │
│  Je souhaiterais discuter d'un      │
│  projet avec vous...                │
│                                     │
└─────────────────────────────────────┘
```
