import os

from dotenv import load_dotenv


# Charge les variables du fichier .env
load_dotenv()


class Config:
    # =========================================================
    # 🌐 APPLICATION
    # =========================================================

    SECRET_KEY = os.getenv(
        "SECRET_KEY",
        "change-me-in-production"
    )

    SITE_NAME = os.getenv(
        "SITE_NAME",
        "Bumpify"
    )

    SITE_URL = os.getenv(
        "SITE_URL",
        "http://localhost:5000"
    )

    # =========================================================
    # 🗄️ DATABASE
    # =========================================================

    DATABASE_URL = os.getenv(
        "DATABASE_URL",
        "sqlite:///website.db"
    )

    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # =========================================================
    # 🤖 DISCORD BOT
    # =========================================================

    DISCORD_BOT_TOKEN = os.getenv(
        "DISCORD_BOT_TOKEN",
        ""
    )

    DISCORD_CLIENT_ID = os.getenv(
        "DISCORD_CLIENT_ID",
        ""
    )

    DISCORD_CLIENT_SECRET = os.getenv(
        "DISCORD_CLIENT_SECRET",
        ""
    )

    DISCORD_BOT_INVITE_URL = os.getenv(
        "DISCORD_BOT_INVITE_URL",
        ""
    )

    # =========================================================
    # 🔐 DISCORD OAUTH2
    # =========================================================

    DISCORD_OAUTH_AUTHORIZE_URL = (
        "https://discord.com/oauth2/authorize"
    )

    DISCORD_OAUTH_TOKEN_URL = (
        "https://discord.com/api/oauth2/token"
    )

    DISCORD_API_URL = (
        "https://discord.com/api"
    )

    DISCORD_REDIRECT_URI = os.getenv(
        "DISCORD_REDIRECT_URI",
        f"{SITE_URL}/auth/callback"
    )

    DISCORD_OAUTH_SCOPES = os.getenv(
        "DISCORD_OAUTH_SCOPES",
        "identify guilds"
    ).split()

    # =========================================================
    # 👑 ADMIN
    # =========================================================

    ADMIN_USERNAME = os.getenv(
        "ADMIN_USERNAME",
        "admin"
    )

    ADMIN_PASSWORD_HASH = os.getenv(
        "ADMIN_PASSWORD_HASH",
        ""
    )

    # =========================================================
    # 📡 API
    # =========================================================

    API_KEY = os.getenv(
        "API_KEY",
        ""
    )

    # =========================================================
    # ⚙️ BUMP
    # =========================================================

    BUMP_COOLDOWN = int(
        os.getenv(
            "BUMP_COOLDOWN",
            "7200"
        )
    )

    # =========================================================
    # 🎨 SITE
    # =========================================================

    SITE_DESCRIPTION = os.getenv(
        "SITE_DESCRIPTION",
        "Discord server bumping platform."
    )

    SITE_LOGO = os.getenv(
        "SITE_LOGO",
        "/static/img/logo.png"
    )

    # =========================================================
    # 🛠️ ENVIRONMENT
    # =========================================================

    DEBUG = os.getenv(
        "DEBUG",
        "False"
    ).lower() == "true"
