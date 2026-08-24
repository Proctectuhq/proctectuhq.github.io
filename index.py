<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>VS-Bump - Serveurs Discord</title>
    <meta name="description" content="VS-Bump - Découvre, vote et référence les meilleurs serveurs Discord.">

    <link rel="icon" href="assets/images/favicon.png">

    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/cards.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>

    <!-- NAVBAR -->
    <header class="navbar">
        <div class="navbar-container">

            <a href="index.html" class="navbar-logo">
                <span class="logo-icon">🚀</span>
                <span class="logo-text">VS-Bump</span>
            </a>

            <nav class="navbar-links">
                <a href="index.html" class="navbar-link">🏠 Accueil</a>
                <a href="pages/servers.html" class="navbar-link">🌐 Serveurs</a>
                <a href="pages/search.html" class="navbar-link">🔎 Recherche</a>
                <a href="pages/premium.html" class="navbar-link premium-link">👑 Premium</a>
            </nav>

            <div class="navbar-actions">
                <a href="pages/dashboard.html"
                   class="navbar-dashboard"
                   id="dashboard-link">
                    📊 Dashboard
                </a>

                <a href="pages/login.html"
                   class="navbar-login"
                   id="login-link">
                    💜 Connexion Discord
                </a>

                <button class="navbar-toggle"
                        id="navbar-toggle"
                        type="button"
                        aria-label="Ouvrir le menu">
                    ☰
                </button>
            </div>

        </div>
    </header>


    <!-- HERO -->
    <main>

        <section class="hero">
            <div class="container">

                <div class="hero-content">

                    <span class="hero-badge">
                        🚀 Bienvenue sur VS-Bump
                    </span>

                    <h1>
                        Trouve les meilleurs
                        <span>serveurs Discord</span>
                    </h1>

                    <p>
                        Découvre de nouvelles communautés, vote pour tes
                        serveurs préférés et fais grandir ton serveur Discord.
                    </p>

                    <div class="hero-actions">

                        <a href="pages/servers.html" class="btn">
                            🌐 Explorer les serveurs
                        </a>

                        <a href="pages/add-server.html" class="btn btn-secondary">
                            ➕ Ajouter mon serveur
                        </a>

                    </div>

                </div>

            </div>
        </section>


        <!-- RECHERCHE -->
        <section class="search-section">
            <div class="container">

                <form class="home-search"
                      id="search-form"
                      action="pages/search.html"
                      method="get">

                    <span class="search-icon">🔎</span>

                    <input
                        type="search"
                        id="search-input"
                        name="q"
                        placeholder="Rechercher un serveur Discord..."
                        autocomplete="off">

                    <button type="submit" class="btn">
                        Rechercher
                    </button>

                </form>

            </div>
        </section>


        <!-- STATISTIQUES -->
        <section class="stats-section">
            <div class="container">

                <div class="stats-grid">

                    <div class="card stat-card">
                        <span class="stat-icon">🌐</span>
                        <strong id="stat-servers">0</strong>
                        <span>Serveurs référencés</span>
                    </div>

                    <div class="card stat-card">
                        <span class="stat-icon">👥</span>
                        <strong id="stat-members">0</strong>
                        <span>Membres</span>
                    </div>

                    <div class="card stat-card">
                        <span class="stat-icon">⬆️</span>
                        <strong id="stat-votes">0</strong>
                        <span>Votes</span>
                    </div>

                    <div class="card stat-card">
                        <span class="stat-icon">⭐</span>
                        <strong id="stat-reviews">0</strong>
                        <span>Avis</span>
                    </div>

                </div>

            </div>
        </section>


        <!-- SERVEURS -->
        <section class="servers-section">
            <div class="container">

                <div class="section-header">

                    <div>
                        <span class="section-badge">🔥 Populaires</span>

                        <h2>
                            Les serveurs du moment
                        </h2>

                        <p>
                            Découvre les communautés les plus populaires
                            sur VS-Bump.
                        </p>
                    </div>

                    <a href="pages/servers.html" class="btn btn-secondary">
                        Voir tous les serveurs →
                    </a>

                </div>


                <div class="servers-grid" id="servers-container">

                    <article class="server-card">

                        <div class="server-card-header">

                            <img
                                src="assets/images/default-server.png"
                                alt="Serveur Discord"
                                class="server-card-icon">

                            <div class="server-card-info">

                                <h3 class="server-card-name">
                                    Serveur exemple
                                </h3>

                                <span class="server-card-category">
                                    🎮 Gaming
                                </span>

                            </div>

                        </div>

                        <p class="server-card-description">
                            Découvre une nouvelle communauté Discord.
                        </p>

                        <div class="server-card-stats">
                            <span>👥 0 membres</span>
                            <span>⬆️ 0 votes</span>
                        </div>

                        <div class="server-card-footer">

                            <span class="server-card-status">
                                🟢 En ligne
                            </span>

                            <a href="pages/server.html"
                               class="server-card-button">
                                👀 Voir
                            </a>

                        </div>

                    </article>

                </div>

            </div>
        </section>


        <!-- CTA -->
        <section class="cta-section">
            <div class="container">

                <div class="cta-card">

                    <span>🚀</span>

                    <h2>
                        Ton serveur mérite d'être découvert
                    </h2>

                    <p>
                        Ajoute gratuitement ton serveur Discord sur VS-Bump
                        et commence à recevoir des votes.
                    </p>

                    <a href="pages/add-server.html" class="btn">
                        ➕ Ajouter mon serveur
                    </a>

                </div>

            </div>
        </section>

    </main>


    <!-- FOOTER -->
    <footer class="footer">
        <div class="footer-container">

            <div class="footer-brand">

                <a href="index.html" class="footer-logo">
                    🚀 VS-Bump
                </a>

                <p>
                    Le classement des meilleurs serveurs Discord.
                </p>

            </div>

            <div class="footer-links">

                <a href="pages/support.html">🛠️ Support</a>
                <a href="pages/rules.html">📜 Règlement</a>
                <a href="pages/privacy.html">🔒 Confidentialité</a>
                <a href="pages/terms.html">📄 Conditions</a>

            </div>

            <div class="footer-bottom">
                © 2026 VS-Bump. Tous droits réservés.
            </div>

        </div>
    </footer>


    <!-- SCRIPTS -->
    <script src="js/config.js"></script>
    <script src="js/api.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/servers.js"></script>
    <script src="js/search.js"></script>
    <script src="js/statistics.js"></script>

</body>
</html>
