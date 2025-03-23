import Navbar from "../Components/Navbar";

const Home = () => {
  // Inline styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Chiều cao tối thiểu bằng chiều cao màn hình
      margin: 0,
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
    },
    main: {
      flex: 1, // Đẩy footer xuống cuối màn hình
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Căn giữa nội dung theo chiều dọc
      alignItems: "center", // Căn giữa nội dung theo chiều ngang
      padding: "2rem",
      textAlign: "center",
    },
    header: {
      marginBottom: "2rem",
    },
    logo: {
      fontSize: "3rem",
      color: "#87cefa",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    tagline: {
      fontSize: "1.2rem",
      color: "#b0b0c3",
      marginBottom: "2rem",
      lineHeight: "1.5",
    },
    tabMenu: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
    },
    tab: {
      fontSize: "1rem",
      padding: "0.5rem 1.5rem",
      border: "none",
      background: "none",
      color: "#d3d3d3",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    activeTab: {
      color: "#87cefa",
      borderBottom: "2px solid #87cefa",
    },
    uploadSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    uploadIcon: {
      width: "120px",
      height: "120px",
      border: "2px dashed #87cefa",
      borderRadius: "10px",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    chooseFileButton: {
      padding: "0.7rem 1.5rem",
      backgroundColor: "#87cefa",
      color: "#1a1a2e",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    footer: {
      padding: "1rem",
      fontSize: "0.9rem",
      color: "#b0b0c3",
      textAlign: "center",
      backgroundColor: "#12122b", // Footer khác màu để phân biệt
    },
    link: {
      color: "#87cefa",
      textDecoration: "none",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.main}>
          <header style={styles.header}>
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
          <div style={styles.uploadSection}>
            <div style={styles.uploadIcon}>
              <i className="fingerprint-icon"></i>
            </div>
            <button style={styles.chooseFileButton}>Choose file</button>
          </div>
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
