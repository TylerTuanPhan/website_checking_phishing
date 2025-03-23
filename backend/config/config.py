import os

# Cấu hình Database (Laragon MySQL)
DB_HOST = os.getenv('DB_HOST', 'localhost')
DB_USER = os.getenv('DB_USER', 'root')
DB_PASS = os.getenv('DB_PASS', '')
DB_NAME = os.getenv('DB_NAME', 'phishing_checker')

# Secret Key
SECRET_KEY = os.getenv('SECRET_KEY', 'supersecretkey')

# CORS
ALLOWED_ORIGINS = ["http://localhost:5173"]

# Đường dẫn mô hình ML
MODEL_PATH = "model/url_model.pkl"
EMAIL_MODEL_PATH = "model/random_forest_model.pkl"
TFIDF_VECTORIZER_PATH = "model/tfidf_vectorizer.pkl"

