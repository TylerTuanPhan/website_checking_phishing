import { useState } from "react";

const Result = () => {
  const [activeTab, setActiveTab] = useState("detection"); // Quản lý tab đang active

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.circleContainer}>
          <div style={styles.circle}>
            <p style={styles.score}>0</p>
            <p style={styles.subText}>/ 96</p>
          </div>
          <p style={styles.communityScore}>Community Score: 1229</p>
        </div>
        <div style={styles.urlContainer}>
          <h3 style={styles.urlStatus}>
            No security vendors flagged this URL as malicious
          </h3>
          <p style={styles.urlText}>https://www.youtube.com/</p>
          <div style={styles.tagContainer}>
            {[
              "text/html",
              "iframes",
              "third-party-cookies",
              "external-resources",
            ].map((tag, index) => (
              <span key={index} style={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div style={styles.tabContainer}>
        {["detection", "details", "associations", "community"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={activeTab === tab ? styles.activeTab : styles.tab}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={styles.content}>
        {activeTab === "detection" && <DetectionTab />}
        {/* Thêm các component khác tương tự nếu cần */}
      </div>
    </div>
  );
};

const DetectionTab = () => {
  const vendors = [
    "Abusix",
    "ADMINUSLabs",
    "AlienVault",
    "Antiy-AVL",
    "benkow.cc",
    "Acronis",
    "AILabs (MONITORAPP)",
    "alphaMountain.ai",
    "Artists Against 419",
    "BitDefender",
  ];

  return (
    <div style={styles.tableContainer}>
      <button style={styles.communityButton}>Join our Community</button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Security Vendors Analysis</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{vendor}</td>
              <td style={styles.tableCell}>
                <span style={styles.cleanTag}>Clean</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles tích hợp trong file JSX
const styles = {
  container: {
    backgroundColor: "#1b1c2e",
    color: "#fff",
    padding: "20px",
    fontFamily: "Arial",
    borderRadius: "10px",
    width: "80%",
    margin: "20px auto",
  },
  header: { display: "flex", marginBottom: "20px" },
  circleContainer: { textAlign: "center" },
  circle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#25274d",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  score: { fontSize: "32px", margin: "0" },
  subText: { fontSize: "14px", margin: "0" },
  communityScore: { marginTop: "10px" },
  urlContainer: { marginLeft: "20px", flex: 1 },
  urlStatus: { margin: "0 0 10px" },
  urlText: { color: "#00adb5", marginBottom: "10px" },
  tagContainer: { display: "flex", gap: "10px" },
  tag: {
    backgroundColor: "#393e64",
    borderRadius: "8px",
    padding: "5px 10px",
    fontSize: "12px",
  },

  tabContainer: { display: "flex", borderBottom: "2px solid #444" },
  tab: {
    flex: 1,
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#25274d",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  activeTab: {
    flex: 1,
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#393e64",
    border: "none",
    color: "#00adb5",
  },

  content: { padding: "20px 0" },
  tableContainer: { marginTop: "10px" },
  communityButton: {
    backgroundColor: "#00adb5",
    border: "none",
    padding: "10px 20px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },

  table: { width: "100%", borderCollapse: "collapse" },
  tableHeader: {
    backgroundColor: "#393e64",
    padding: "10px",
    textAlign: "left",
  },
  tableCell: { padding: "10px", borderBottom: "1px solid #393e64" },
  cleanTag: { color: "#00adb5", fontWeight: "bold" },
};

export default Result;
