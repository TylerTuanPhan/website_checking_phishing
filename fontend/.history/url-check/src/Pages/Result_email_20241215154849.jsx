import { useLocation } from "react-router-dom"; // Để nhận dữ liệu được gửi từ Search.jsx
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const ResultEmail = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const location = useLocation();
  const { email_text, result } = location.state || {
    email_text: "No email content provided",
    result: "Unknown",
  };

  const [isPhishing, setIsPhishing] = useState(result === "Phishing"); // Trạng thái kiểm tra phishing

  const styles = {
    container: {
      top: 0,
      left: 0,
      right: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      padding: "24px",
      height: "100vh",
      justifyContent: "flex-start",
      paddingTop: "80px",
      boxSizing: "border-box", // Đảm bảo box-sizing là border-box
      position: "fixed", // Cố định giao diện
      overflow: "hidden", // Giúp nội dung không bị tràn ra ngoài khi cuộn
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    header: {
      display: "flex",
      gap: "16px",
      marginBottom: "24px",
    },
    cardSquare: {
      backgroundColor: "#2d2d2d",
      borderRadius: "8px",
      width: "150px",
      height: "150px", // Chiều cao cố định
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    cardRectangle: {
      backgroundColor: "#2d2d2d",
      borderRadius: "8px",
      height: "120px", // Cập nhật chiều cao cho cardRectangle bằng với cardSquare
      flexGrow: 1,
      padding: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    warning: {
      fontSize: "1.2rem",
      color: "#ef4444", // Màu đỏ cho thông báo nguy hiểm
      textAlign: "center",
      margin: "1rem 0",
    },
    safe: {
      fontSize: "1.2rem",
      color: "#4ade80", // Màu xanh cho thông báo an toàn
      textAlign: "center",
      margin: "1rem 0",
    },
    emailContent: {
      color: "#aaa",
      margin: "8px 0",
      fontSize: "0.9rem",
      overflowY: "auto", // Cuộn nếu nội dung email dài
      maxHeight: "100px",
    },
  };

  const tabs = ["Detection", "Details", "History", "Community"];

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Cập nhật tab đang được chọn
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.header}>
        <div style={styles.cardSquare}>
          <h1 style={{ fontSize: "36px", margin: "0" }}>0</h1>
          <p style={{ color: "#4ade80", margin: "4px 0" }}>Community Score</p>
          <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
        </div>
        <div style={styles.cardRectangle}>
          {/* Hiển thị thông báo kết quả Email */}
          <h2 style={isPhishing ? styles.warning : styles.safe}>
            {isPhishing
              ? "⚠️ This email has been flagged as phishing."
              : "✅ This email appears to be legitimate."}
          </h2>
          <p style={styles.emailContent}>
            Analyzed Email Content: {email_text.slice(0, 100)}...
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabMenu}>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {}),
            }}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
        <div
          style={{
            ...styles.underline,
            width: `${100 / tabs.length}%`,
            left: `${tabs.indexOf(activeTab) * (100 / tabs.length)}%`,
          }}
        />
      </div>

      {/* Nội dung trong từng tab */}
      {activeTab === "Detection" && (
        <p style={{ color: "#d3d3d3" }}>Detection tab content for email</p>
      )}
      {activeTab === "History" && (
        <p style={{ color: "#d3d3d3" }}>History tab content for email</p>
      )}
    </div>
  );
};

export default ResultEmail;
