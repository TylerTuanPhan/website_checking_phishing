import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

from extract_features import extract_features


def train_url_model(data_path, model_path):
    print("Đang đọc dữ liệu từ file CSV...")
    data = pd.read_csv(data_path)

    if 'features' not in data.columns:
        print("Đang trích xuất đặc trưng từ URL...")
        data['features'] = data['url'].apply(extract_features)

    print("Đang chuẩn bị dữ liệu huấn luyện và kiểm tra...")
    X = pd.DataFrame(data['features'].tolist(), columns=[
        'url_length',  # Độ dài URL
        'root_domain_length',  # Độ dài domain chính
        'is_ip',  # Có phải địa chỉ IP hay không
        'dot_count',  # Số lượng ký tự '.'
        'dash_count',  # Số lượng ký tự '-'
        'at_count',  # Số lượng ký tự '@'
        'question_count',  # Số lượng ký tự '?'
        'ampersand_count',  # Số lượng ký tự '&'
        'equals_count',  # Số lượng ký tự '='
        'underscore_count',  # Số lượng ký tự '_'
        'slash_count',  # Số lượng ký tự '/'
        'has_https',  # Có HTTPS trong URL hay không
        'path_length',  # Độ dài path
        'slash_count_path',  # Số lượng gạch chéo trong path
        'is_suspicious_tld',  # Tên miền đáng ngờ
        'subdomain_count',  # Số lượng subdomain
        'has_url_encoding',  # Có mã hóa URL hay không (%xx)
        'digit_count',  # Số lượng ký tự số
        'hyphen_count'  # Số lượng dấu nối '-'
    ])
    y = data['label']

    print("Chia dữ liệu thành tập huấn luyện và kiểm tra...")
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    print("Bắt đầu huấn luyện mô hình...")
    model = RandomForestClassifier(random_state=42)
    model.fit(X_train, y_train)
    print("Hoàn thành huấn luyện mô hình.")

    print("Đang đánh giá mô hình trên tập kiểm tra...")
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Độ chính xác trên tập kiểm tra: {accuracy:.2f}")

    print(f"Lưu mô hình vào: {model_path}")
    joblib.dump(model, model_path)
    print("Huấn luyện hoàn tất.")

if __name__ == "__main__":
    # Xác định đường dẫn file dữ liệu và mô hình
    data_path = 'data/new_data.csv'  # Thay đổi đúng tên file dữ liệu
    model_path = 'model/url_model.pkl'

    # Gọi hàm huấn luyện
    train_url_model(data_path, model_path)
