const URLs = () => {
  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      padding: "2rem",
      width: "60%",
      margin: "0 auto",
    },
    icon: {
      fontSize: "4rem",
      color: "#87cefa",
      marginBottom: "1rem",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.5rem",
    },
    textField: {
      width: "70%",
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "5px 0 0 5px",
      border: "1px solid #444",
      backgroundColor: "#2e2e4d",
      color: "#d3d3d3",
      outline: "none",
    },
    scanButton: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "0 5px 5px 0",
      backgroundColor: "#87cefa",
      color: "#1a1a2e",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    scanButtonHover: {
      backgroundColor: "#6db8d9",
    },
    description: {
      fontSize: "0.9rem",
      color: "#b0b0c3",
      lineHeight: "1.5",
    },
    link: {
      color: "#87cefa",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <i className="fas fa-globe"></i> {/* Biểu tượng icon */}
      </div>
      <div style={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search or scan a URL"
          style={styles.textField}
        />
        <button
          style={styles.scanButton}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.scanButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.scanButton.backgroundColor)
          }
        >
          Scan
        </button>
      </div>
      <p style={styles.description}>
        By submitting data above, you are agreeing to our{" "}
        <a href="#" style={styles.link}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" style={styles.link}>
          Privacy Notice
        </a>
        , and to the <strong>sharing of your URL submission</strong> with the
        security community. Please do not submit any personal information; we
        are not responsible for the contents of your submission.{" "}
        <a href="#" style={styles.link}>
          Learn more.
        </a>
      </p>
    </div>
  );
};

export default URLs;
