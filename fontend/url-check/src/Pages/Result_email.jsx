import { useLocation } from "react-router-dom"; // Nhận dữ liệu từ Search.jsx
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const ResultEmail = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const [historyEmails, setHistoryEmails] = useState([]); // State lưu lịch sử email
  const location = useLocation();
  const { email_text, result } = location.state || {
    email_text: "No email content provided",
    result: "Unknown",
  };

  const [isPhishing, setIsPhishing] = useState(result === "Phishing");

  // Fetch history email từ backend khi activeTab là "History"
  useEffect(() => {
    if (activeTab === "History") {
      const fetchHistoryEmail = async () => {
        try {
          const response = await fetch("http://localhost:5000/history_email");
          const data = await response.json();
          setHistoryEmails(data);
        } catch (error) {
          console.error("Error fetching history email:", error);
        }
      };
      fetchHistoryEmail();
    }
  }, [activeTab]);

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
    tableCell: {
      padding: "12px 16px",
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
          {/* Hiển thị kết quả phân tích email */}
          <h2 style={isPhishing ? styles.warning : styles.safe}>
            {isPhishing
              ? "⚠️ This email has been flagged as phishing."
              : "✅ This email appears to be legitimate."}
          </h2>
          <p style={{ color: "#aaa", margin: "8px 0" }}>
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

      {/* Tab Detection */}
      {activeTab === "Detection" && (
        <p style={{ color: "#d3d3d3" }}>
          The email content has been analyzed and flagged accordingly.
        </p>
      )}

      {/* Tab Details */}
      {activeTab === "Details" && (
        <p style={{ color: "#d3d3d3" }}>
          Email Content: {email_text.slice(0, 300)}...
        </p>
      )}

      {/* Tab History */}
      {activeTab === "History" && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Email Content</th>
              <th style={styles.tableCell}>Result</th>
              <th style={styles.tableCell}>Checked At</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            {historyEmails.map((item, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  {item.email_text.slice(0, 50)}...
                </td>
                <td
                  style={{
                    ...styles.tableCell,
                    color: item.result === "Phishing" ? "#ef4444" : "#4ade80",
                  }}
                >
                  {item.result}
                </td>
                <td style={styles.tableCell}>{item.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultEmail;
