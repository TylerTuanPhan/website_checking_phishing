import { useState } from "react";

const styles = {
  container: {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#0d1117", // Tông tối
    borderRadius: "10px",
    color: "#c9d1d9",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#161b22",
    borderRadius: "10px",
    textAlign: "center",
  },
  headerTitle: {
    color: "#58a6ff",
    marginBottom: "10px",
    fontSize: "1.5rem",
  },
  headerSubtitle: {
    color: "#8b949e",
    fontSize: "1rem",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  card: {
    flex: "1",
    backgroundColor: "#161b22",
    padding: "20px",
    margin: "0 10px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  circle: {
    width: "80px",
    height: "80px",
    margin: "0 auto 10px",
    borderRadius: "50%",
    backgroundColor: "#0d419d",
    color: "#58a6ff",
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    margin: "0 5px",
    backgroundColor: "#161b22",
    borderRadius: "5px",
    color: "#c9d1d9",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  activeTab: {
    backgroundColor: "#58a6ff",
    color: "#0d1117",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#161b22",
    borderRadius: "10px",
  },
  tableRow: {
    borderBottom: "1px solid #21262d",
  },
  tableCell: {
    padding: "10px",
    textAlign: "left",
    color: "#c9d1d9",
    fontSize: "0.9rem",
  },
};

const Result = () => {
  const [activeTab, setActiveTab] = useState("vendors");

  const vendors = [
    { name: "Abusix", status: "Clean" },
    { name: "Acronis", status: "Clean" },
    { name: "ADMINUSLabs", status: "Clean" },
    { name: "AlphaSOC", status: "Clean" },
    { name: "Antiy-AVL", status: "Clean" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>
          No security vendors flagged this URL as malicious
        </h2>
        <p style={styles.headerSubtitle}>https://www.youtube.com/</p>
      </div>

      {/* Score Cards */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <div style={styles.circle}>0/96</div>
          <p>Security Vendors</p>
        </div>
        <div style={styles.card}>
          <div style={styles.circle}>1229</div>
          <p>Community Score</p>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <div
          style={{
            ...styles.tab,
            ...(activeTab === "vendors" && styles.activeTab),
          }}
          onClick={() => handleTabClick("vendors")}
        >
          Security Vendors
        </div>
        <div
          style={{
            ...styles.tab,
            ...(activeTab === "community" && styles.activeTab),
          }}
          onClick={() => handleTabClick("community")}
        >
          Community
        </div>
      </div>

      {/* Table */}
      {activeTab === "vendors" && (
        <table style={styles.table}>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>{vendor.name}</td>
                <td style={styles.tableCell}>{vendor.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === "community" && (
        <div style={{ textAlign: "center", color: "#c9d1d9" }}>
          <p>Community analysis data will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default Result;
