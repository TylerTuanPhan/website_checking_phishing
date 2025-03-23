import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [emailContent, setEmailContent] = useState(""); // State lưu nội dung email
  const [loading, setLoading] = useState(false); // State loading trong khi chờ backend xử lý
  const navigate = useNavigate(); // Hook để điều hướng

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      height: "30vh", // Chiều cao của toàn bộ khung container
      border: "2px dashed #87cefa", // Khung gạch đứt
      width: "90%", // Chiều rộng tổng thể của container
      maxWidth: "1000px", // Đặt giới hạn chiều rộng tối đa
      borderRadius: "10px",
      margin: "0 auto",
      position: "relative", // Để dịch chuyển
      transform: "translateY(-200px)", // Dịch lên trên
    },
    textarea: {
      width: "90%", // Chiều rộng của textarea
      height: "120px", // Chiều cao cố định, tạo hình chữ nhật ngang
      resize: "none", // Ngăn việc thay đổi kích thước
      overflowY: "auto", // Tạo scrollbar khi nội dung dài
      border: "none",
      outline: "none",
      padding: "1rem",
      fontSize: "1rem",
      color: "#d3d3d3",
      backgroundColor: "#2d2d2d",
      boxSizing: "border-box",
      marginBottom: "1rem", // Tạo khoảng cách giữa textarea và button
    },
    button: {
      marginTop: "1rem",
      padding: "0.5rem 2rem",
      backgroundColor: "#87cefa",
      color: "#1a1a2e",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      transition: "background 0.3s ease",
    },
    buttonLoading: {
      backgroundColor: "#5f9ea0",
      cursor: "not-allowed",
    },
    heading: {
      marginBottom: "1.5rem", // Thêm khoảng cách giữa tiêu đề và textarea
      fontSize: "1.5rem",
      color: "#87cefa",
    },
  };

  // Hàm xử lý khi nhấn nút Check Email
  const handleCheckEmail = async () => {
    if (!emailContent.trim()) {
      alert("Please paste the email content.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/scan_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email_text: emailContent }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        // Điều hướng sang Result.jsx và gửi kết quả
        navigate("/Result", {
          state: { email_text: emailContent, result: data.result },
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error checking email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Paste Email Content</h2>
      <textarea
        style={styles.textarea}
        placeholder="Paste the email content here..."
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
      />
      <button
        style={{ ...styles.button, ...(loading ? styles.buttonLoading : {}) }}
        onClick={handleCheckEmail}
        disabled={loading}
      >
        {loading ? "Checking..." : "Check Email"}
      </button>
    </div>
  );
};

export default Search;
