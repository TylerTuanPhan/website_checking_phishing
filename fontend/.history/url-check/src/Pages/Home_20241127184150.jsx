import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0); // State để theo dõi tab nào được chọn

  // Inline styles
  const styles = {
    body: {
      top: 0,
      left: 0,
      right: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      textAlign: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      paddingTop: "120px",
      boxSizing: "border-box",
    },
    logo: {
      fontSize: "3.0rem",
      color: "#87cefa",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    tagline: {
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#b0b0c3",
      marginBottom: "2rem",
    },
    tabMenu: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      width: "300px",
      marginBottom: "2rem",
      borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
    },
    tab: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
      background: "none",
      color: "#d3d3d3",
      border: "none",
      cursor: "pointer",
      transition: "color 0.3s",
      flex: 1,
      position: "relative",
    },
    activeTab: {
      color: "#87cefa",
    },
    underline: {
      position: "absolute",
      bottom: "0",
      left: `${activeTab * 33.33}%`, // Chuyển động underline
      width: "33.33%",
      height: "2px",
      backgroundColor: "#87cefa",
      transition: "left 0.3s ease",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.body}>
        <header>
          <div style={styles.logo}>VIRUSTOTAL</div>
          <p style={styles.tagline}>
            Analyse suspicious files, domains, IPs, and URLs to detect malware
            and other breaches, automatically share them with the security
            community.
          </p>
        </header>

        <div style={styles.tabMenu}>
          <button
            style={{ ...styles.tab, ...(activeTab === 0 && styles.activeTab) }}
            onClick={() => setActiveTab(0)}
          >
            FILE
          </button>
          <button
            style={{ ...styles.tab, ...(activeTab === 1 && styles.activeTab) }}
            onClick={() => setActiveTab(1)}
          >
            URL
          </button>
          <button
            style={{ ...styles.tab, ...(activeTab === 2 && styles.activeTab) }}
            onClick={() => setActiveTab(2)}
          >
            SEARCH
          </button>
          <div style={styles.underline}></div>
        </div>

        <div style={styles.uploadSection}>
          <div style={styles.uploadIcon}>
            <i className="fingerprint-icon"></i>
          </div>
          <button style={styles.chooseFileButton}>Choose file</button>
        </div>

        <footer style={styles.footer}>
          <p>
            By submitting data above, you are agreeing to our{" "}
            <a href="#" style={styles.link}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" style={styles.link}>
              Privacy Notice
            </a>
            , and to the <strong>sharing of your sample submission</strong> with
            the security community. Please do not submit any personal
            information; we are not responsible for the contents of your
            submission.{" "}
            <a href="#" style={styles.link}>
              Learn more.
            </a>
          </p>
          <p>
            <a href="#" style={styles.link}>
              Want to automate submissions?
            </a>{" "}
            Check our{" "}
            <a href="#" style={styles.link}>
              API
            </a>
            , or access your{" "}
            <a href="#" style={styles.link}>
              API key
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
