import { useLocation } from "react-router-dom"; // Để nhận dữ liệu được gửi từ URLs.jsx
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const [loading, setLoading] = useState(true); // Trạng thái loading
  const [communityScore, setCommunityScore] = useState(null); // Giá trị Community Score
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
      boxSizing: "border-box",
      position: "fixed",
      overflow: "hidden",
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
      height: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    cardRectangle: {
      backgroundColor: "#2d2d2d",
      borderRadius: "8px",
      height: "120px",
      flexGrow: 1,
      padding: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    spinner: {
      width: "50px",
      height: "50px",
      border: "6px solid #ccc",
      borderTop: "6px solid #4ade80",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    "@keyframes spin": {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
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
    warning: {
      fontSize: "1rem",
      color: "#ef4444",
    },
    safe: {
      fontSize: "1rem",
      color: "#4ade80",
    },
  };

  const tabs = ["Detection", "Details", "History", "Community"];
  const rows = [
    { vendor: "Abusix", status: "Clean" },
    { vendor: "ADMINUSLabs", status: "Clean" },
    { vendor: "AlienVault", status: "Clean" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Giả lập gọi API để lấy Community Score
    const fetchCommunityScore = async () => {
      setLoading(true); // Bắt đầu loading
      setTimeout(() => {
        setCommunityScore(42); // Giá trị ví dụ
        setLoading(false); // Kết thúc loading
      }, 2000); // Giả lập thời gian chờ API
    };

    fetchCommunityScore();
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.cardSquare}>
          {loading ? (
            <div style={styles.spinner}></div> // Hiển thị loading spinner
          ) : (
            <>
              <h1 style={{ fontSize: "36px", margin: "0" }}>
                {communityScore}
              </h1>
              <p style={{ color: "#4ade80", margin: "4px 0" }}>
                Community Score
              </p>
              <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
            </>
          )}
        </div>
        <div style={styles.cardRectangle}>
          <h2 style={isPhishing ? styles.warning : styles.safe}>
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
          <thead>
            <tr>
              <th>Security Vendor</th>
              <th>Analysis</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.vendor}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Result;
