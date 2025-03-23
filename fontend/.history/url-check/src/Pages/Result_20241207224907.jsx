import { useLocation } from "react-router-dom"; // Để nhận dữ liệu được gửi từ URLs.jsx
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const [scannedUrls, setScannedUrls] = useState([]); // Dữ liệu các URL đã scan
  const location = useLocation();
  const { url, result } = location.state || {
    url: "Không có URL",
    result: "Unknown",
  };

  const [isInvalidUrl, setIsInvalidUrl] = useState(false); // Trạng thái kiểm tra URL hợp lệ
  const [isPhishing, setIsPhishing] = useState(result === "Phishing"); // Kiểm tra phishing

  // Biểu thức chính quy kiểm tra định dạng URL hợp lệ
  const validateUrl = (inputUrl) => {
    const regex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
    return regex.test(inputUrl);
  };

  // Kiểm tra URL hợp lệ
  useEffect(() => {
    if (!validateUrl(url)) {
      setIsInvalidUrl(true); // Nếu URL không hợp lệ, cập nhật trạng thái lỗi
    } else {
      setIsInvalidUrl(false); // Nếu URL hợp lệ, kiểm tra phishing
    }
  }, [url]);

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
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "16px",
      backgroundColor: "#2d2d2d",
    },
    tableHead: {
      backgroundColor: "#333",
      color: "#ccc",
      textAlign: "left",
      textTransform: "uppercase",
    },
    tableBody: {
      color: "#ddd",
    },
    tableRow: {
      borderBottom: "1px solid #444",
      cursor: "pointer",
    },
    tableRowHover: {
      backgroundColor: "#3d3d3d",
    },
    tableCell: {
      padding: "12px 16px",
    },
    cleanStatus: {
      color: "#4ade80",
    },
    warning: {
      fontSize: "1rem",
      color: "#ef4444", // Màu đỏ cho thông báo nguy hiểm
    },
    safe: {
      fontSize: "1rem",
      paddingTop: "0.1px",
      color: "#4ade80", // Màu xanh cho thông báo an toàn
    },
  };

  const tabs = ["Detection", "Details", "History", "Community"];

  // Hàm lấy dữ liệu lịch sử từ backend
  useEffect(() => {
    if (activeTab === "History") {
      const fetchHistory = async () => {
        try {
          const response = await fetch("http://localhost:5000/history"); // Đổi thành endpoint backend
          const data = await response.json();
          setScannedUrls(data); // Cập nhật lịch sử URL vào state
        } catch (error) {
          console.error("Error fetching history:", error);
        }
      };
      fetchHistory();
    }
  }, [activeTab]);

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
          {/* Kiểm tra nếu URL không hợp lệ */}
          <h2
            style={
              isInvalidUrl
                ? styles.warning
                : isPhishing
                ? styles.warning
                : styles.safe
            }
          >
            {isInvalidUrl
              ? "Invalid URL format entered. Please correct it."
              : isPhishing
              ? "Security vendor flagged this URL as malicious"
              : "No security vendors flagged this URL as malicious"}
          </h2>
          <p style={{ color: "#aaa", margin: "8px 0" }}>{url}</p>
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

      {/* Bảng trong Tab Detection */}
      {activeTab === "Detection" && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Security Vendor</th>
              <th style={styles.tableCell}>Analysis</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Abusix</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>ADMINUSLabs</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Bitdefender</td>
              <td style={{ ...styles.tableCell, ...styles.warning }}>
                Phishing
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>CrowdStrike</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {/* Bảng trong Tab History */}
      {activeTab === "History" && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>URL</th>
              <th style={styles.tableCell}>Status</th>
              <th style={styles.tableCell}>Checked At</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            {scannedUrls.map((item, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{item.url}</td>
                <td
                  style={{
                    ...styles.tableCell,
                    ...(item.result === "Phishing"
                      ? styles.warning
                      : styles.cleanStatus),
                  }}
                >
                  {item.result}
                </td>
                <td style={styles.tableCell}>{item.checked_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
