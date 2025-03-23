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
  },
  statusCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  circle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#162447",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableCell: {
    borderBottom: "1px solid #4ecca3",
    padding: "10px",
  },
};

const Result = () => {
  const vendors = [
    { name: "Abusix", status: "Clean" },
    { name: "Acronis", status: "Clean" },
    { name: "ADMINUSLabs", status: "Clean" },
    // Thêm các nhà cung cấp khác tại đây
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>No security vendors flagged this URL as malicious</h2>
        <p>https://www.youtube.com/</p>
      </div>

      <div style={styles.statusCard}>
        <div style={styles.circle}>
          <h3>0/96</h3>
        </div>
        <p>Community Score: 1229</p>
      </div>

      <div>
        <h3>Security vendors analysis</h3>
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
      </div>
    </div>
  );
};

export default Result;
