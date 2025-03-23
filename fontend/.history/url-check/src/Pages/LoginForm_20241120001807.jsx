const LoginForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "white",
      borderRadius: "8px",
      padding: "20px",
      width: "300px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      fontSize: "16px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#183153",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2>Login</h2>
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
};

export default LoginForm;
