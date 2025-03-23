const URLs = () => {
  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      width: "60%",
      margin: "0 auto",
    },
    icon: {
      fontSize: "4rem",
      color: "#87cefa",
      marginBottom: "1rem",
    },
    textField: {
      width: "100%",
      padding: "0.5rem",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "1px solid #444",
      backgroundColor: "#2e2e4d",
      color: "#d3d3d3",
      outline: "none",
      marginBottom: "1.5rem",
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
      <input
        type="text"
        placeholder="Search or scan a URL"
        style={styles.textField}
      />
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
