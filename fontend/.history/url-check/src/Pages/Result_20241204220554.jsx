import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";

const Result = () => {
  const [activeTab, setActiveTab] = useState("Detection");
  const [scannedUrls, setScannedUrls] = useState([]);
  const location = useLocation();
  const { url = "Không có URL", result = "Unknown" } = location.state || {};
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  const [isPhishing, setIsPhishing] = useState(result === "Phishing");

  const validateUrl = (inputUrl) =>
    /^(https?:\/\/[^\s$.?#].[^\s]*)$/i.test(inputUrl);

  useEffect(() => {
    setIsInvalidUrl(!validateUrl(url));
    if (!isInvalidUrl) setIsPhishing(result === "Phishing");
  }, [url, result, isInvalidUrl]);

  useEffect(() => {
    setScannedUrls([
      { url: "http://example1.com", status: "Clean" },
      { url: "http://example2.com", status: "Phishing" },
      { url: "http://example3.com", status: "Clean" },
    ]);
  }, []);

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      padding: "24px 10% 0",
      height: "100vh",
      boxSizing: "border-box",
      overflow: "hidden",
      paddingTop: "80px",
    },
    card: {
      backgroundColor: "#2d2d2d",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      color: "#d3d3d3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    cardSquare: { width: "150px", height: "150px" },
    cardRectangle: { height: "120px", flexGrow: 1, padding: "16px" },
    header: { display: "flex", gap: "16px", marginBottom: "24px" },
    tabMenu: {
      display: "flex",
      justifyContent: "space-between",
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
      flex: 1,
      textAlign: "center",
    },
    activeTab: { color: "#87cefa" },
    underline: {
      position: "absolute",
      bottom: "-2px",
      height: "2px",
      backgroundColor: "#87cefa",
      transition: "left 0.3s ease, width 0.3s ease",
    },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "16px" },
    tableHead: {
      backgroundColor: "#333",
      color: "#ccc",
      textAlign: "left",
      textTransform: "uppercase",
    },
    tableBody: { color: "#ddd" },
    tableRow: { borderBottom: "1px solid #444", cursor: "pointer" },
    tableRowHover: { backgroundColor: "#3d3d3d" },
    tableCell: { padding: "12px 16px" },
    cleanStatus: { color: "#4ade80" },
    warning: { fontSize: "1rem", color: "#ef4444" },
    safe: { fontSize: "1rem", paddingTop: "0.1px", color: "#4ade80" },
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  const tabs = ["Detection", "Details", "History", "Community"];
  const statusMessage = isInvalidUrl
    ? "Invalid URL format entered. Please correct it."
    : isPhishing
    ? "Security vendor flagged this URL as malicious"
    : "No security vendors flagged this URL as malicious";

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.header}>
        <div style={{ ...styles.card, ...styles.cardSquare }}>
          <h1 style={{ fontSize: "36px", margin: "0" }}>0</h1>
          <p style={{ color: "#4ade80", margin: "4px 0" }}>Community Score</p>
          <p style={{ fontSize: "14px", color: "#aaa" }}>/96</p>
        </div>
        <div style={{ ...styles.card, ...styles.cardRectangle }}>
          <h2 style={isInvalidUrl || isPhishing ? styles.warning : styles.safe}>
            {statusMessage}
          </h2>
          <p style={{ color: "#aaa", margin: "8px 0" }}>{url}</p>
        </div>
      </div>

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

      {activeTab === "Detection" && (
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Security Vendor</th>
              <th style={styles.tableCell}>Analysis</th>
            </tr>
          </thead>
          <tbody style={styles.tableBody}>
            {scannedUrls.map(({ url, status }) => (
              <tr key={url} style={styles.tableRow}>
                <td style={styles.tableCell}>{url}</td>
                <td
                  style={{
                    ...styles.tableCell,
                    ...(status === "Phishing"
                      ? styles.warning
                      : styles.cleanStatus),
                  }}
                >
                  {status}
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
