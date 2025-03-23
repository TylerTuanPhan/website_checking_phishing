import PropTypes from "prop-types";

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
      backgroundColor: "#171717",
      borderRadius: "20px",
      padding: "2em",
      maxWidth: "300px", // Đặt chiều rộng tối đa
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
      fontSize: "18px",
      fontWeight: "bold",
      color: "white",
    },
    heading: {
      textAlign: "center",
      color: "#87cefa",
      fontSize: "2.0em",
      marginBottom: "0.5em",
    },
    field: {
      display: "flex",
      alignItems: "center",
      gap: "0.5em",
      padding: "0.6em",
      borderRadius: "25px",
      backgroundColor: "#171717",
      boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
      color: "white",
      marginBottom: "1em",
    },
    input: {
      background: "none",
      border: "none",
      outline: "none",
      width: "100%",
      color: "rgb(0, 255, 200)",
      fontSize: "1em",
    },
    button: {
      padding: "0.6em 1em",
      backgroundImage: "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
      color: "rgb(0, 0, 0)",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "all .4s ease",
      fontWeight: "bold",
      width: "50%",
    },
    hoverButton: {
      padding: "0.6em 1em",
      backgroundImage: "linear-gradient(163deg, #00642f 0%, #13034b 100%)",
      color: "rgb(0, 255, 200)",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "all .4s ease",
      fontWeight: "bold",
      width: "50%",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "1em",
    },
    forgotPasswordButton: {
      padding: "0.6em",
      borderRadius: "5px",
      border: "none",
      background: "#3700ff",
      color: "white",
      width: "100%",
      cursor: "pointer",
      transition: "all .4s ease",
      marginTop: "1.5em",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <h2 style={styles.heading}>Login</h2>
        <div style={styles.field}>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            autoComplete="off"
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            style={styles.input}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Login</button>
          <button style={styles.hoverButton}>Sign Up</button>
        </div>
        <button style={styles.forgotPasswordButton}>Forgot Password</button>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
