import Navbar from "../Components/Navbar";

const Home = () => {
  // Inline styles
  const styles = {
    html: {
      height: "100%", // Đảm bảo html bao phủ chiều cao màn hình
      margin: "0",
      padding: "0",
    },
    body: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      textAlign: "center",
      height: "100%", // Chiều cao của body bằng chiều cao màn hình
      width: "100%", // Chiều rộng của body bằng chiều rộng màn hìnhcd
      display: "flex", // Sử dụng Flexbox để căn giữa nội dung
      flexDirection: "column", // Sắp xếp theo chiều dọc
      justifyContent: "center", // Căn giữa theo trục dọc
      alignItems: "center", // Căn giữa theo trục ngang
      padding: "2rem",
      paddingTop: "170px", // Đảm bảo nội dung nằm dưới Navbar
      boxSizing: "border-box", // Bao gồm padding trong chiều cao
      margin: "0", // Loại bỏ margin mặc định
    },
    bodyContainer: {
      flex: "1", // Đẩy footer xuống cuối
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      paddingTop: "170px", // Đảm bảo nội dung nằm dưới Navbar
      boxSizing: "border-box",
    },
    logo: {
      fontSize: "2.5rem",
      color: "#87cefa",
      fontWeight: "bold",
      marginBottom: "0.5rem",
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
    uploadSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "2rem",
    },
    uploadIcon: {
      width: "100px",
      height: "100px",
      border: "2px dashed #87cefa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1rem",
      borderRadius: "10px",
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

  return (
    <>
      <Navbar />
      <div style={styles.bodyContainer}>
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
