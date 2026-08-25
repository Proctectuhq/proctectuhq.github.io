# 🚀 Bumpify

Plateforme de bump Discord permettant de référencer des serveurs, consulter leurs statistiques et gérer les bumps depuis un site web.

---

## ✨ Fonctionnalités

### 🌐 Site

- 🏠 Page d'accueil
- 🔐 Connexion avec Discord
- 👤 Profil utilisateur
- 🖥️ Liste des serveurs
- 🔎 Recherche de serveurs
- 🏆 Classement des serveurs
- 📈 Statistiques
- 📢 Historique des bumps
- ➕ Ajout du bot Discord
- ⚙️ Dashboard utilisateur

### 👑 Panel administrateur

- 📊 Dashboard administrateur
- 🤖 Gestion du bot
- 🔗 Gestion du lien d'invitation
- ⚙️ Paramètres du site
- 👤 Gestion des utilisateurs
- 🖥️ Gestion des serveurs
- 📜 Logs
- 🔐 Authentification administrateur

### 🤖 Bot Discord

Le bot Discord sera connecté à l'API du site.

Fonctionnalités prévues :

- `/bump`
- ⏱️ Cooldown
- 📊 Statistiques
- 📢 Messages de bump
- 🔄 Synchronisation avec le site

---

# 📁 Structure

```text
website/
│
├── app.py
├── config.py
├── requirements.txt
├── .env.example
├── run.py
├── README.md
│
├── templates/
│   ├── index.html
│   ├── base.html
│   ├── login.html
│   ├── dashboard.html
│   ├── servers.html
│   ├── server.html
│   ├── search.html
│   ├── top.html
│   ├── profile.html
│   ├── add_bot.html
│   ├── bumps.html
│   └── admin/
│       ├── login.html
│       ├── dashboard.html
│       ├── settings.html
│       ├── users.html
│       ├── servers.html
│       ├── logs.html
│       └── bot.html
│
├── static/
│   ├── css/
│   │   ├── style.css
│   │   ├── home.css
│   │   ├── dashboard.css
│   │   └── admin.css
│   │
│   ├── js/
│   │   ├── home.js
│   │   ├── dashboard.js
│   │   └── admin.js
│   │
│   └── img/
│
├── routes/
├── database/
├── utils/
└── api/
