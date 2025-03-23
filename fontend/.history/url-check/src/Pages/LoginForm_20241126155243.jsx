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
  const [isVisible, setIsVisible] = useState(false);

  // Snackbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true); // Hiện form khi component được mount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeUsername = "Linsiucute@123";
    const fakePassword = "151125";

    if (username === fakeUsername && password === fakePassword) {
      setSnackbarMessage("Đăng nhập thành công!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setTimeout(() => {
        setShowLoginForm(false);
        navigate("/");
      }, 1000);
    } else {
      setSnackbarMessage("Sai tài khoản hoặc mật khẩu!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleOverlayClick = () => {
    setIsVisible(false);
    setTimeout(() => setShowLoginForm(false), 300);
  };

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    formContainer: {
      backgroundColor: "#282c34",
      padding: "40px",
      borderRadius: "15px",
      width: "350px",
      position: "relative",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.3s ease",
    },
  };

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      <div style={styles.formContainer} onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: "#f4c842", textAlign: "center" }}>ĐĂNG NHẬP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Tài khoản"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            required
          />
          <button type="submit">ĐĂNG NHẬP</button>
        </form>
      </div>

      {/* Snackbar thông báo */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000}>
        <Alert severity={snackbarSeverity}>{snackbarMessage}</Alert>
      </Snackbar>
    </div>
  );
};

LoginForm.propTypes = {
  setShowLoginForm: PropTypes.func.isRequired,
};

export default LoginForm;
