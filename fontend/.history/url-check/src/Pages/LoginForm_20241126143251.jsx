import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginForm = ({ setShowLoginForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [formPosition, setFormPosition] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Snackbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const navigate = useNavigate();

  useEffect(() => {
    const formWidth = 350; // Increased width
    const formHeight = 400; // Increased height
    const centerX = (window.innerWidth - formWidth) / 2;
    const centerY = (window.innerHeight - formHeight) / 2;
    setFormPosition({ x: centerX, y: centerY });
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fakeUsername = "Linsiucute@123";
    const fakePassword = "151125";

    // const fakeUsername1 = "Linsiucute@123";
    // const fakePassword1 = "151125";

    if (username === fakeUsername && password === fakePassword) {
      setSnackbarMessage("Đăng nhập thành công!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setIsVisible(false);
      setTimeout(() => {
        setShowLoginForm(false);
        navigate("/game");
      }, 300);
    } else {
      setSnackbarMessage("Sai tài khoản hoặc mật khẩu!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleOverlayClick = () => {
    setIsVisible(false);
    setTimeout(() => setShowLoginForm(false), 100);
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setMouseOffset({
      x: e.clientX - formPosition.x,
      y: e.clientY - formPosition.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setFormPosition({
        x: e.clientX - mouseOffset.x,
        y: e.clientY - mouseOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly darker overlay
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    formContainer: {
      backgroundColor: "#282c34", // Changed to a darker color
      padding: "40px", // Increased padding
      borderRadius: "15px", // Rounded corners
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)", // Stronger shadow
      width: "350px", // Set to 350px for a wider form
      position: "absolute",
      top: `${formPosition.y}px`,
      left: `${formPosition.x}px`,
      transition: "opacity 0.3s ease, transform 0.3s ease",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(-10px)",
      color: "#ffffff", // Changed text color to white
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      backgroundColor: "transparent",
      border: "none",
      color: "#ffffff", // Changed close button color to white
      fontSize: "24px",
      cursor: "pointer",
    },
    h2: {
      color: "#f4c842", // Header color to gold
      marginBottom: "20px",
      textAlign: "center", // Centered header
    },
    inputContainer: {
      position: "relative",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "10px",
      background: "transparent",
      border: "none",
      borderBottom: "2px solid #f4c842", // Gold color for underline
      color: "#ffffff", // Input text color
      fontSize: "16px",
      outline: "none",
    },
    label: {
      position: "absolute",
      top: "50%",
      left: "10px",
      color: "#9ca3af",
      transform: "translateY(-50%)",
      transition: "0.3s ease",
      pointerEvents: "none",
    },
    submitBtn: {
      width: "100%",
      padding: "12px", // Increased padding
      backgroundColor: "#f4c842", // Button color to gold
      border: "none",
      color: "#1a1a1a", // Text color for button
      fontSize: "18px", // Increased font size
      cursor: "pointer",
      borderRadius: "10px",
      transition:
        "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <div
      style={styles.overlay}
      onClick={handleOverlayClick}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={styles.formContainer}
        onClick={handleFormClick}
        onMouseDown={handleMouseDown}
      >
        <button
          style={styles.closeButton}
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setShowLoginForm(false), 300);
          }}
        >
          &times;
        </button>
        <h2 style={styles.h2}>ĐĂNG NHẬP</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
            <label
              style={{
                ...styles.label,
                ...(username
                  ? { top: "-10px", fontSize: "12px", color: "#f4c842" }
                  : {}),
              }}
            >
              Tài khoản
            </label>
          </div>
          <div style={styles.inputContainer}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <label
              style={{
                ...styles.label,
                ...(password
                  ? { top: "-10px", fontSize: "12px", color: "#f4c842" }
                  : {}),
              }}
            >
              Mật khẩu
            </label>
          </div>
          <button
            type="submit"
            style={styles.submitBtn}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#1a1a1a"; // Change on hover
              e.currentTarget.style.color = "#f4c842"; // Change text color on hover
              e.currentTarget.style.boxShadow =
                "0px 4px 15px rgba(0, 0, 0, 0.2)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#f4c842"; // Reset on mouse out
              e.currentTarget.style.color = "#1a1a1a"; // Reset text color on mouse out
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ĐĂNG NHẬP
          </button>
        </form>
      </div>

      {/* Snackbar thông báo */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

LoginForm.propTypes = {
  setShowLoginForm: PropTypes.func.isRequired,
};

export default LoginForm;
