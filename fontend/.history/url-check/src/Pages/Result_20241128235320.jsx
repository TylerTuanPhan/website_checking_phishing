const Result = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.scoreCircle}>
          <p style={styles.scoreText}>0</p>
          <p style={styles.smallText}>/ 96</p>
        </div>
        <div style={styles.statusBox}>
          <h3 style={styles.statusText}>
            No security vendors flagged this URL as malicious
          </h3>
          <p style={styles.url}>https://www.youtube.com/</p>
          <div style={styles.tagContainer}>
            <span style={styles.tag}>text/html</span>
            <span style={styles.tag}>iframes</span>
            <span style={styles.tag}>third-party-cookies</span>
            <span style={styles.tag}>external-resources</span>
          </div>
        </div>
      </div>

      <div style={styles.detailsSection}>
        <button style={styles.communityButton}>Join our Community</button>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Security vendors analysis</th>
              <th style={styles.tableHeader}>Status</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={index}>
                <td style={styles.tableCell}>{vendor.name}</td>
                <td style={styles.tableCell}>
                  <span style={styles.cleanTag}>Clean</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const vendors = [
  { name: "Abusix" },
  { name: "ADMINUSLabs" },
  { name: "AlienVault" },
  { name: "Antiy-AVL" },
  { name: "benkow.cc" },
  { name: "Acronis" },
  { name: "AILabs (MONITORAPP)" },
  { name: "alphaMountain.ai" },
  { name: "Artists Against 419" },
  { name: "BitDefender" },
];

const styles = {
  container: {
    backgroundColor: "#1a1a2e",
    color: "#e5e5e5",
    padding: "20px",
    fontFamily: "Arial",
    borderRadius: "10px",
    width: "80%",
    margin: "20px auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  scoreCircle: {
    width: "100px",
    height: "100px",
    backgroundColor: "#262647",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: { fontSize: "32px", margin: 0 },
  smallText: { fontSize: "12px", margin: 0 },
  statusBox: { flex: 1, marginLeft: "20px" },
  statusText: { margin: "0 0 10px" },
  url: { color: "#66fcf1", marginBottom: "10px" },
  tagContainer: { display: "flex", gap: "10px" },
  tag: {
    backgroundColor: "#0d7377",
    borderRadius: "8px",
    padding: "5px 10px",
    fontSize: "12px",
  },
  communityButton: {
    backgroundColor: "#0d7377",
    border: "none",
    padding: "10px 20px",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#162447",
    borderRadius: "10px",
    overflow: "hidden",
  },
  tableHeader: {
    backgroundColor: "#1f4068",
    padding: "10px",
    textAlign: "left",
  },
  tableCell: { padding: "10px", borderBottom: "1px solid #1f4068" },
  cleanTag: { color: "#66fcf1", fontWeight: "bold" },
};

export default Result;
