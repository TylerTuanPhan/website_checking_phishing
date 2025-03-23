import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Search = () => {
  const [emailContent, setEmailContent] = useState(""); // State lưu nội dung email
  const [loading, setLoading] = useState(false); // State loading trong khi chờ backend xử lý
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Trạng thái mở Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Nội dung thông báo
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
      height: "20vh",
      border: "2px dashed #87cefa",
      width: "150%",
      maxWidth: "800px",
      borderRadius: "10px",
      margin: "0 auto",
      position: "relative",
      transform: "translateY(-200px)",
      right: "35%",
    },
    textarea: {
      width: "100%",
      height: "200px",
      resize: "none",
      overflowY: "auto",
      border: "none",
      outline: "none",
      padding: "1rem",
      fontSize: "1rem",
      color: "#d3d3d3",
      backgroundColor: "#2d2d2d",
      boxSizing: "border-box",
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
      marginBottom: "1rem",
      fontSize: "1.5rem",
      color: "#87cefa",
    },
  };

  // Đóng Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Hàm xử lý khi nhấn nút Check Email
  const handleCheckEmail = async () => {
    if (!emailContent.trim()) {
      setSnackbarMessage("Vui lòng nhập nội dung email để kiểm tra.");
      setSnackbarOpen(true);
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
        // Điều hướng sang Result_email.jsx và gửi kết quả
        navigate("/Result_email", {
          state: { email_text: emailContent, result: data.result },
        });
      } else {
        setSnackbarMessage("Lỗi từ server: " + data.error);
        setSnackbarOpen(true);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error checking email:", error);
      setSnackbarMessage("Lỗi kết nối tới server.");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      {/* Snackbar đặt ngoài container */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

      {/* Container giữ giao diện chính */}
      <div style={styles.container}>
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
    </>
  );
};

export default Search;
