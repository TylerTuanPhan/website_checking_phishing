from flask import Flask
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from config.config import ALLOWED_ORIGINS


def create_app():
    app = Flask(__name__)
    CORS(app, origins=ALLOWED_ORIGINS)

    # ✅ Khởi tạo Flask-Limiter để hạn chế số lần thử đăng nhập
    limiter = Limiter(get_remote_address, app=app, default_limits=["5 per minute"])

    # ✅ Import các route và truyền `limiter` vào `auth_bp`
    from app.routes.phishing import phishing_bp
    from app.routes.auth import create_auth_blueprint

    auth_bp = create_auth_blueprint(limiter)  # Truyền limiter vào auth
    app.register_blueprint(phishing_bp)
    app.register_blueprint(auth_bp)

    return app
