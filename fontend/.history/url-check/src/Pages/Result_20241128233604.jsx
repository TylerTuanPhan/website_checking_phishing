import { useState } from "react";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#0f3460",
    borderRadius: "10px",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    color: "#4ecca3",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  card: {
    flex: 1,
    backgroundColor: "#162447",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "0 10px",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#1f4068",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 10px",
    color: "#4ecca3",
    fontSize: "18px",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: "#162447",
    margin: "0 5px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  activeTab: {
    backgroundColor: "#4ecca3",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#162447",
    borderRadius: "10px",
  },
  tableCell: {
    borderBottom: "1px solid #4ecca3",
    padding: "10px",
    textAlign: "center",
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
      <div style={styles.header}>
        <h2>No security vendors flagged this URL as malicious</h2>
        <p>https://www.youtube.com/</p>
      </div>

      {/* Card Container */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <div style={styles.circle}>
            <h3>0/96</h3>
          </div>
          <p>Security Vendors</p>
        </div>
        <div style={styles.card}>
          <div style={styles.circle}>
            <h3>1229</h3>
          </div>
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
              <tr key={index}>
                <td style={styles.tableCell}>{vendor.name}</td>
                <td style={styles.tableCell}>{vendor.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === "community" && (
        <div style={{ textAlign: "center" }}>
          <p>Community analysis data will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default Result;
