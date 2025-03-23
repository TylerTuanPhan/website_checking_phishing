from flask import Blueprint, request, jsonify
import bcrypt
from app.utils.db import get_db_connection

def create_auth_blueprint(limiter):
    auth_bp = Blueprint('auth', __name__)

    # Mã hóa mật khẩu với bcrypt
    def hash_password(password):
        salt = bcrypt.gensalt()
        return bcrypt.hashpw(password.encode(), salt).decode()

    # Kiểm tra mật khẩu
    def check_password(password, hashed_password):
        return bcrypt.checkpw(password.encode(), hashed_password.encode())

    # API đăng ký
    @auth_bp.route('/register', methods=['POST'])
    def register():
        data = request.json
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({'error': 'Username and password are required'}), 400

        hashed_password = hash_password(password)

        try:
            db = get_db_connection()
            cursor = db.cursor()
            cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed_password))
            db.commit()
            return jsonify({'message': 'User registered successfully'}), 201
        except Exception as e:
            return jsonify({'error': f'Error registering user: {str(e)}'}), 500

    # API đăng nhập với giới hạn số lần thử
    @auth_bp.route('/login', methods=['POST'])
    @limiter.limit("5 per minute")  # ✅ Giới hạn 5 lần/phút
    def login():
        data = request.json
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({'error': 'Username and password are required'}), 400

        db = get_db_connection()
        cursor = db.cursor()
        cursor.execute("SELECT password FROM users WHERE username = %s", (username,))
        user = cursor.fetchone()

        if user and check_password(password, user[0]):
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'error': 'Invalid username or password'}), 401

    return auth_bp  # ✅ Trả về `auth_bp`
