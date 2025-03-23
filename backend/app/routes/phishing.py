from flask import Blueprint, request, jsonify
from app.utils.extract_features import extract_features
from app.models.phishing_model import model_url, model_email, tfidf_vectorizer
from app.utils.db import get_db_connection

phishing_bp = Blueprint('phishing', __name__)


@phishing_bp.route('/predict', methods=['POST'])
def predict_url():
    data = request.json
    url = data.get('url')
    if not url:
        return jsonify({'error': 'No URL provided'}), 400

    features = extract_features(url)
    prediction = model_url.predict([features])
    result = "Phishing" if prediction[0] == 1 else "Legitimate"

    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("INSERT INTO history (url, result) VALUES (%s, %s)", (url, result))
    db.commit()

    return jsonify({'url': url, 'result': result}), 200


@phishing_bp.route('/scan_email', methods=['POST'])
def scan_email():
    data = request.json
    email_text = data.get('email_text')
    if not email_text:
        return jsonify({'error': 'No email text provided'}), 400

    text_vectorized = tfidf_vectorizer.transform([email_text])
    prediction = model_email.predict(text_vectorized)
    result = 'Phishing' if prediction[0] == 1 else 'Legitimate'

    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("INSERT INTO history_email (email_text, result) VALUES (%s, %s)", (email_text, result))
    db.commit()

    return jsonify({'email_text': email_text, 'result': result}), 200
