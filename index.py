<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>VS-Bump — Trouve ton serveur Discord</title>

    <meta name="description" content="VS-Bump est une plateforme pour découvrir, rechercher et promouvoir des serveurs Discord.">

    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/cards.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>

    <!-- NAVBAR -->
    <div id="navbar"></div>

    <!-- HERO -->
    <main>

        <section class="hero">

            <div class="hero-content">

                <span class="hero-badge">
                    🚀 Découvrez de nouveaux serveurs Discord
                </span>

                <h1>
                    Trouve ton prochain
                    <span>serveur Discord</span>
                </h1>

                <p>
                    Explore des milliers de serveurs Discord, découvre de nouvelles
                    communautés et fais connaître ton propre serveur.
                </p>

                <div class="hero-buttons">

                    <a href="pages/servers.html" class="btn btn-primary">
                        🔎 Explorer les serveurs
                    </a>

                    <a href="pages/add-server.html" class="btn btn-secondary">
                        ➕ Ajouter mon serveur
                    </a>

                </div>

            </div>

        </section>


        <!-- STATISTIQUES -->
        <section class="stats">

            <div class="stat-card">
                <span class="stat-icon">🌐</span>
                <strong id="server-count">0</strong>
                <p>Serveurs référencés</p>
            </div>

            <div class="stat-card">
                <span class="stat-icon">👥</span>
                <strong id="member-count">0</strong>
                <p>Membres</p>
            </div>

            <div class="stat-card">
                <span class="stat-icon">❤️</span>
                <strong id="vote-count">0</strong>
                <p>Votes aujourd'hui</p>
            </div>

        </section>


        <!-- SERVEURS POPULAIRES -->
        <section class="popular-servers">

            <div class="section-header">

                <div>
                    <span class="section-badge">🔥 POPULAIRE</span>

                    <h2>
                        Serveurs populaires
                    </h2>

                    <p>
                        Les serveurs Discord les plus appréciés par la communauté.
                    </p>
                </div>

                <a href="pages/servers.html" class="view-all">
                    Voir tous les serveurs →
                </a>

            </div>

            <div id="popular-servers-container" class="server-grid">

                <!-- Les serveurs seront chargés automatiquement par JavaScript -->

                <div class="loading">
                    <span>⏳</span>
                    Chargement des serveurs...
                </div>

            </div>

        </section>


        <!-- CATÉGORIES -->
        <section class="categories">

            <div class="section-header">

                <div>
                    <span class="section-badge">📂 CATÉGORIES</span>

                    <h2>
                        Trouve ta communauté
                    </h2>

                    <p>
                        Explore les serveurs selon tes centres d'intérêt.
                    </p>
                </div>

            </div>


            <div class="category-grid">

                <a href="pages/servers.html?category=gaming" class="category-card">
                    <span>🎮</span>
                    <h3>Gaming</h3>
                    <p>Jeux vidéo et communautés gaming</p>
                </a>

                <a href="pages/servers.html?category=community" class="category-card">
                    <span>💬</span>
                    <h3>Communauté</h3>
                    <p>Discute et rencontre de nouvelles personnes</p>
                </a>

                <a href="pages/servers.html?category=anime" class="category-card">
                    <span>🎌</span>
                    <h3>Anime</h3>
                    <p>Mangas, anime et culture japonaise</p>
                </a>

                <a href="pages/servers.html?category=music" class="category-card">
                    <span>🎵</span>
                    <h3>Musique</h3>
                    <p>Partage et découvre de la musique</p>
                </a>

                <a href="pages/servers.html?category=development" class="category-card">
                    <span>💻</span>
                    <h3>Développement</h3>
                    <p>Programmation et technologie</p>
                </a>

                <a href="pages/servers.html?category=other" class="category-card">
                    <span>✨</span>
                    <h3>Autres</h3>
                    <p>Découvre encore plus de communautés</p>
                </a>

            </div>

        </section>


        <!-- CTA -->
        <section class="cta">

            <div class="cta-content">

                <span>🚀</span>

                <h2>
                    Tu as un serveur Discord ?
                </h2>

                <p>
                    Ajoute-le gratuitement sur VS-Bump et fais-le découvrir
                    à de nouveaux membres.
                </p>

                <a href="pages/add-server.html" class="btn btn-primary">
                    ➕ Ajouter mon serveur
                </a>

            </div>

        </section>

    </main>


    <!-- FOOTER -->
    <div id="footer"></div>


    <!-- JAVASCRIPT -->
    <script src="js/config.js"></script>
    <script src="js/api.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/servers.js"></script>

</body>
</html>
