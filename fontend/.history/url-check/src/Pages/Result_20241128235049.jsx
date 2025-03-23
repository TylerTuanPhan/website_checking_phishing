const Result = () => {
  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      color: "white",
      padding: "24px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      borderBottom: "1px solid #444",
      paddingBottom: "16px",
      marginBottom: "24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: "24px",
      fontWeight: "600",
    },
    url: {
      color: "#4ade80",
      marginTop: "8px",
    },
    tabs: {
      display: "flex",
      gap: "16px",
      borderBottom: "1px solid #444",
      paddingBottom: "16px",
      marginBottom: "24px",
    },
    tab: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#aaa",
      cursor: "pointer",
    },
    tabHover: {
      color: "white",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
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
  };

  const tabs = ["Detection", "Details", "Associations", "Community"];
  const rows = [
    { vendor: "Abusix", status: "Clean" },
    { vendor: "ADMINUSLabs", status: "Clean" },
    { vendor: "AlienVault", status: "Clean" },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>
            No security vendors flagged this URL as malicious
          </h1>
          <p style={styles.url}>https://www.youtube.com/</p>
          <p style={{ color: "#888" }}>www.youtube.com</p>
        </div>
        <button
          style={{
            backgroundColor: "#4ade80",
            color: "white",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reanalyze
        </button>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {tabs.map((tab) => (
          <span
            key={tab}
            style={styles.tab}
            onMouseOver={(e) => (e.target.style.color = styles.tabHover.color)}
            onMouseOut={(e) => (e.target.style.color = styles.tab.color)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Table */}
      <table style={styles.table}>
        <thead style={styles.tableHead}>
          <tr>
            <th style={styles.tableCell}>Security Vendor</th>
            <th style={styles.tableCell}>Analysis</th>
          </tr>
        </thead>
        <tbody style={styles.tableBody}>
          {rows.map((row, index) => (
            <tr
              key={index}
              style={styles.tableRow}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.tableRowHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <td style={styles.tableCell}>{row.vendor}</td>
              <td style={{ ...styles.tableCell, ...styles.cleanStatus }}>
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
