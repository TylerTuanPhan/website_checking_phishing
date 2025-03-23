import joblib
from config.config import MODEL_PATH, EMAIL_MODEL_PATH, TFIDF_VECTORIZER_PATH

model_url = joblib.load(MODEL_PATH)
model_email = joblib.load(EMAIL_MODEL_PATH)
tfidf_vectorizer = joblib.load(TFIDF_VECTORIZER_PATH)
