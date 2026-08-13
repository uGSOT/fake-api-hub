import os
from functools import lru_cache
from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


def _normalize_mysql_url(url: str) -> str:
    """Railway provides mysql:// — SQLAlchemy needs mysql+pymysql://."""
    if url.startswith("mysql+pymysql://"):
        return url
    if url.startswith("mysql://"):
        return url.replace("mysql://", "mysql+pymysql://", 1)
    return url


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    app_name: str = "Fake API Hub"
    app_env: str = "development"
    app_debug: bool = True

    host: str = "0.0.0.0"
    port: int = 8000

    db_host: str = "127.0.0.1"
    db_port: int = 3306
    db_user: str = "root"
    db_password: str = ""
    db_name: str = "fake_api_hub"
    database_url: Optional[str] = None

    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173"

    @property
    def sqlalchemy_database_url(self) -> str:
        # Explicit app config
        if self.database_url:
            return _normalize_mysql_url(self.database_url)

        # Railway / cloud env vars (MYSQL_URL, DATABASE_URL)
        for env_key in ("DATABASE_URL", "MYSQL_URL", "MYSQL_PUBLIC_URL"):
            env_url = os.getenv(env_key)
            if env_url:
                return _normalize_mysql_url(env_url)

        # Railway individual MySQL variables
        railway_host = os.getenv("MYSQLHOST")
        if railway_host:
            railway_port = int(os.getenv("MYSQLPORT", "3306"))
            railway_user = os.getenv("MYSQLUSER", "root")
            railway_password = os.getenv("MYSQLPASSWORD", "")
            railway_db = os.getenv("MYSQLDATABASE", "railway")
            return (
                f"mysql+pymysql://{railway_user}:{railway_password}"
                f"@{railway_host}:{railway_port}/{railway_db}"
            )

        return (
            f"mysql+pymysql://{self.db_user}:{self.db_password}"
            f"@{self.db_host}:{self.db_port}/{self.db_name}"
        )

    @property
    def cors_origin_list(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
