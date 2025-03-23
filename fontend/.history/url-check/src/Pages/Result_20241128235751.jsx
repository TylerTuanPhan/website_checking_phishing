import { useState } from "react";

const Result = () => {
  const [activeTab, setActiveTab] = useState("detection");

  return (
    <div style={styles.container}>
      {/* Tabs Section */}
      <div style={styles.tabContainer}>
        {["detection", "details", "associations", "community"].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={
              activeTab === tab
                ? { ...styles.tab, ...styles.activeTab }
                : styles.tab
            }
          >
            {tab.toUpperCase()}
            {tab === "community" && (
              <span style={styles.communityBadge}>347</span>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div style={styles.content}>
        {activeTab === "detection" && <DetectionTab />}
        {/* Thêm các component khác tương tự */}
      </div>
    </div>
  );
};

const DetectionTab = () => {
  return (
    <div style={{ color: "#fff" }}>
      {" "}
      {/* Nội dung tab */}
      <p>Detection tab content here...</p>
    </div>
  );
};

// Styles
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
  tabContainer: {
    display: "flex",
    borderBottom: "1px solid #393e64",
    marginBottom: "20px",
  },
  tab: {
    flex: 1,
    textAlign: "center",
    padding: "10px 0",
    color: "#a1a1c5",
    cursor: "pointer",
    position: "relative",
    fontWeight: "bold",
  },
  activeTab: {
    color: "#5e8dee",
    borderBottom: "2px solid #5e8dee",
  },
  communityBadge: {
    backgroundColor: "#393e64",
    borderRadius: "50%",
    color: "#5e8dee",
    padding: "2px 8px",
    fontSize: "12px",
    marginLeft: "10px",
    display: "inline-block",
  },
  content: {
    padding: "10px 0",
  },
};

export default Result;
