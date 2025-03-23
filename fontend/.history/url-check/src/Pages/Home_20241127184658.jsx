import { useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
      position: "fixed",
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
      gap: "2rem",
      marginBottom: "2rem",
      position: "relative",
      borderBottom: "2px solid #444",
      width: "300px",
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
      textAlign: "center",
      position: "relative",
    },
    activeTab: {
      color: "#87cefa",
    },
    underline: {
      position: "absolute",
      bottom: "0",
      height: "2px",
      backgroundColor: "#87cefa",
      transition: "left 0.3s ease, width 0.3s ease",
      left: `${(activeIndex * 100) / 3 + 16.5}%`, // Điều chỉnh vị trí underline
      transform: "translateX(-50%)", // Căn giữa underline
      width: "100px",
    },
    uploadSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "2rem",
    },
    chooseFileButton: {
      padding: "0.7rem 1.5rem",
      border: "none",
      backgroundColor: "#87cefa",
      color: "#1a1a2e",
      fontSize: "1rem",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "background-color 0.3s",
    },
    footer: {
      fontSize: "0.8rem",
      lineHeight: "1.5",
      color: "#b0b0c3",
      marginTop: "auto",
      textAlign: "center",
    },
    link: {
      color: "#87cefa",
      textDecoration: "none",
    },
  };

  const tabs = ["FILE", "URL", "SEARCH"];

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
          {tabs.map((tab, index) => (
            <button
              key={index}
              style={{
                ...styles.tab,
                ...(activeIndex === index ? styles.activeTab : {}),
              }}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </button>
          ))}
          <div
            style={{
              ...styles.underline,
              left: `${activeIndex * (100 / tabs.length) + 16.5}%`, // Update vị trí underline
              transform: "translateX(-50%)",
              width: `${100 / tabs.length}%`,
            }}
          />
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
