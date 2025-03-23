const LoginForm = ({ onClose }) => {
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
      zIndex: 1001,
    },
    formContainer: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "300px",
      textAlign: "center",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "transparent",
      border: "none",
      fontSize: "18px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.formContainer}>
        <button style={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Login</h2>
        <form>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
