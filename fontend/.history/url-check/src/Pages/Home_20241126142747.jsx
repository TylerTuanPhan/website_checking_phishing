import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm"; // Đảm bảo import LoginForm

const Home = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); // state để kiểm tra có hiển thị LoginForm không

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
      height: "100%",
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
    },
    tab: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
      background: "none",
      color: "#d3d3d3",
      border: "none",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    activeTab: {
      borderBottom: "2px solid #87cefa",
      color: "#87cefa",
    },
    footer: {
      fontSize: "0.8rem",
      lineHeight: "1.5",
      color: "#b0b0c3",
      marginTop: "auto",
      textAlign: "center",
    },
    loginButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#87cefa",
      color: "#1a1a2e",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
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
          <button style={{ ...styles.tab, ...styles.activeTab }}>FILE</button>
          <button style={styles.tab}>URL</button>
          <button style={styles.tab}>SEARCH</button>
        </div>

        {/* Thêm nút Login để hiển thị form */}
        <button
          style={styles.loginButton}
          onClick={() => setShowLoginForm(true)}
        >
          Login
        </button>

        <footer style={styles.footer}>
          <p>
            By submitting data above, you are agreeing to our Terms of
            Service...
          </p>
        </footer>
      </div>

      {/* Hiển thị LoginForm nếu showLoginForm là true */}
      {showLoginForm && <LoginForm setShowLoginForm={setShowLoginForm} />}
    </>
  );
};

export default Home;
