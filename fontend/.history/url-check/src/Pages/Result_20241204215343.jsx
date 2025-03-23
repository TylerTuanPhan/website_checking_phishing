import { useLocation, useNavigate } from "react-router-dom"; // Sử dụng useNavigate thay vì useHistory
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const [scannedUrls, setScannedUrls] = useState([]); // Dữ liệu các URL đã scan
  const [error, setError] = useState(null); // Thêm state để lưu lỗi
  const location = useLocation();
  const navigate = useNavigate(); // Thay đổi useHistory thành useNavigate
  const { url, result } = location.state || {
    url: "Không có URL",
    result: "Unknown",
  };

  // Kiểm tra kết quả là "Phishing" hay không
  const isPhishing = result === "Phishing";

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
    errorMessage: {
      fontSize: "1rem",
      color: "#ef4444", // Màu đỏ cho thông báo lỗi
      marginTop: "20px",
    },
  };

  const tabs = ["Detection", "Details", "History", "Community"];

  // Kiểm tra xem URL có hợp lệ hay không
  const isValidUrl = (inputUrl) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(inputUrl);
  };

  // Kiểm tra URL hợp lệ và xử lý khi không hợp lệ
  useEffect(() => {
    if (!isValidUrl(url) && url !== "Không có URL") {
      setError("URL không hợp lệ! Vui lòng kiểm tra lại.");
    } else {
      setError(null); // Reset lỗi khi URL hợp lệ
    }
  }, [url]);

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Cập nhật tab đang được chọn
  };

  return (
    <div style={styles.container}>
      <Navbar /> {/* Đặt Navbar chỉ một lần */}
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.cardSquare}>
          <h1 style={{ fontSize: "36px", margin: "0" }}>0</h1>
          <p style={{ color: "#4ade80", margin: "4px 0" }}>Community Score</p>
          <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
        </div>
        <div style={styles.cardRectangle}>
          {/* Nếu có lỗi, hiển thị thông báo lỗi trong thẻ h2 */}
          <h2
            style={
              error ? styles.warning : isPhishing ? styles.warning : styles.safe
            }
          >
            {error
              ? error // Hiển thị thông báo lỗi nếu có
              : isPhishing
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
      {/* Bảng trong Tab Detection */}
      {activeTab === "Detection" && !error && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Security Vendor</th>
              <th style={styles.tableCell}>Status</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Bitdefender</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Kaspersky</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>McAfee</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
            <tr style={styles.tableRow}>
              <td style={styles.tableCell}>Bitdefender</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                Clean
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
