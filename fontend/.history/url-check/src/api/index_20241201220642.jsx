import axios from "axios";

export const checkURLApi = async (url) => {
  try {
    const res = await axios.post("http://127.0.0.1:5000/predict", { url });

    // Kiểm tra kết quả trong phản hồi và in ra dữ liệu.
    console.log(res.data); // In ra toàn bộ dữ liệu API trả về
    console.log(res.data.result); // In riêng kết quả, ví dụ: "Legitimate"

    return res.data; // Trả về kết quả dữ liệu API
  } catch (error) {
    console.log(error); // In ra lỗi nếu có
  }
};
