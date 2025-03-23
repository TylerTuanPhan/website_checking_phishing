import { useLocation } from "react-router-dom"; // Để nhận dữ liệu được gửi từ URLs.jsx
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const [isLoading, setIsLoading] = useState(true); // Trạng thái loading
  const location = useLocation(); // Nhận dữ liệu từ điều hướng
  const { url, isPhishing } = location.state || {}; // Lấy URL và trạng thái (phishing hay không)

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
    tabMenu: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      width: "350px",
      borderBottom: "2px solid #444",
      marginBottom: "2rem",
    },
    tab: {
      fontSize: "0.7rem",
      padding: "0.5rem 1rem",
      background: "none",
      color: "#d3d3d3",
      border: "none",
      cursor: "pointer",
      transition: "color 0.3s",
      flex: 1,
      textAlign: "center",
      position: "relative",
    },
    activeTab: {
      color: "#87cefa",
    },
    underline: {
      position: "absolute",
      bottom: "-2px",
      height: "2px",
      backgroundColor: "#87cefa",
      transition: "left 0.3s ease, width 0.3s ease",
    },
    spinner: {
      border: "8px solid rgba(255, 255, 255, 0.3)",
      borderTop: "8px solid #3498db",
      borderRadius: "50%",
      width: "70px",
      height: "70px",
      animation: "spin 1.5s linear infinite, pulse 1.5s infinite",
      boxShadow: "0 0 20px #3498db",
    },
    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
    "@keyframes pulse": {
      "0%, 100%": { transform: "scale(1)" },
      "50%": { transform: "scale(1.1)" },
    },
    cleanStatusText: {
      color: "#4ade80",
    },
    warningText: {
      fontSize: "1rem",
      color: "#ef4444", // Màu đỏ cho thông báo nguy hiểm
    },
    safeText: {
      fontSize: "1rem",
      paddingTop: "0.1px",
      color: "#4ade80", // Màu xanh cho thông báo an toàn
    },
  };

  const tabs = ["Detection", "Details", "History", "Community"];
  const rows = [
    { vendor: "Abusix", status: "Clean" },
    { vendor: "ADMINUSLabs", status: "Clean" },
    { vendor: "AlienVault", status: "Clean" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Cập nhật tab đang được chọn
  };

  // Giả lập gọi API và thay đổi trạng thái loading sau 3 giây
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Sau 3 giây, đổi trạng thái loading thành false
    }, 1000);
  }, []);

  return (
    <div style={styles.container}>
      <Navbar /> {/* Đặt Navbar chỉ một lần */}
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.cardSquare}>
          {isLoading ? (
            <div style={styles.spinner}></div> // Hiển thị spinner khi đang loading
          ) : (
            <>
              <h1 style={{ fontSize: "36px", margin: "0" }}>0</h1>
              <p style={styles.cleanStatusText}>Community Score</p>
              <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
            </>
          )}
        </div>
        <div style={styles.cardRectangle}>
          <h2 style={isPhishing ? styles.warningText : styles.safeText}>
            {isPhishing
              ? "Security vendor flagged this URL as malicious"
              : "No security vendors flagged this URL as malicious"}
          </h2>
          <p style={{ color: "#aaa", margin: "8px 0" }}>{url}</p>
          <div style={{ marginTop: "21px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                padding: "4px 8px",
                marginRight: "8px",
                fontSize: "12px",
              }}
            >
              text/html
            </span>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                padding: "4px 8px",
                marginRight: "8px",
                fontSize: "12px",
              }}
            >
              external-resources
            </span>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "white",
                borderRadius: "4px",
                padding: "4px 8px",
                fontSize: "12px",
              }}
            >
              third-party-cookies
            </span>
          </div>
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
      {/* Table */}
      {activeTab === "Detection" && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Security Vendor</th>
              <th style={styles.tableCell}>Analysis</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            {rows.map((row, index) => (
              <tr
                key={index}
                style={styles.tableRow}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.tableRowHover.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <td style={styles.tableCell}>{row.vendor}</td>
                <td style={{ ...styles.tableCell, ...styles.cleanStatusText }}>
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
