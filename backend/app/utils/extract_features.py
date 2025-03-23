import re
import tldextract
from urllib.parse import urlparse

# Hàm kiểm tra ký tự đặc biệt trong URL
def count_special_chars(url, chars):
    """Đếm số lần xuất hiện của các ký tự đặc biệt trong URL."""
    return [len(re.findall(char, url)) for char in chars]

# Hàm lấy domain chính từ URL
def get_root_domain(url):
    """Trích xuất domain chính từ URL."""
    extracted = tldextract.extract(url)
    return f"{extracted.domain}.{extracted.suffix}"

# Hàm rút trích đặc trưng từ URL
def extract_features(url):
    """Rút trích các đặc trưng từ URL."""
    features = []

    if isinstance(url, str):
        # 1. Độ dài của URL
        url_length = len(url)
        features.append(url_length)

        # 2. Rút trích domain chính (root domain)
        root_domain = get_root_domain(url)
        features.append(len(root_domain))  # Độ dài domain chính

        # 3. Địa chỉ IP
        is_ip = 1 if re.search(r'\d+\.\d+\.\d+\.\d+', url) else 0
        features.append(is_ip)

        # 4. Tổng số ký tự đặc biệt
        special_chars = [r'\.', '-', '@', r'\?', '&', '=', '_', '/']
        special_chars_count = count_special_chars(url, special_chars)
        features.extend(special_chars_count)

        # 5. HTTPS trong URL
        has_https = 1 if 'https' in url else 0
        features.append(has_https)

        # 6. Số lượng từ và ký tự trong path
        path = urlparse(url).path
        features.append(len(path))  # Độ dài path
        features.append(path.count('/'))  # Số gạch chéo trong path

        # 7. Kiểm tra tên miền đáng ngờ
        tld = tldextract.extract(url).suffix
        suspicious_tlds = ['tk', 'ml', 'cf', 'ga', 'gq']
        is_suspicious_tld = 1 if tld in suspicious_tlds else 0
        features.append(is_suspicious_tld)

        # 8. Đếm số subdomains
        subdomain = tldextract.extract(url).subdomain
        features.append(subdomain.count('.'))

        # 9. Kiểm tra mã hóa URL
        has_url_encoding = 1 if '%' in url else 0
        features.append(has_url_encoding)

        # 10. Số lượng ký tự số trong URL
        digit_count = sum(c.isdigit() for c in url)
        features.append(digit_count)

        # 11. Số lượng dấu nối (-)
        hyphen_count = url.count('-')
        features.append(hyphen_count)
    else:
        # Nếu URL không hợp lệ, thêm giá trị mặc định
        features = [0] * 18

    return features