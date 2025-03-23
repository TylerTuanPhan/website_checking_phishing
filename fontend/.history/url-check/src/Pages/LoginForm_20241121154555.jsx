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
      background: "linear-gradient(145deg, #6e7dff, #5a63e5)", // Thêm gradient cho background modal
      borderRadius: "15px",
      padding: "40px 30px",
      width: "350px",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      position: "relative",
      textAlign: "center",
    },
    closeButton: {
      position: "absolute",
      top: "15px",
      right: "15px",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
      transition: "color 0.3s",
    },
    closeButtonHover: {
      color: "#e74c3c", // Thêm hiệu ứng hover cho nút đóng
    },
    title: {
      fontSize: "26px",
      marginBottom: "20px",
      color: "#fff",
      fontWeight: "600",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      outline: "none",
      fontSize: "16px",
      color: "#333",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      transition: "border 0.3s",
    },
    inputFocus: {
      border: "1px solid #6e7dff", // Đổi màu border khi input được chọn
    },
    submitButton: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#3498db", // Màu nền nút
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    submitButtonHover: {
      backgroundColor: "#2980b9", // Đổi màu nền khi hover
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px", // Khoảng cách giữa các phần tử
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button
          style={styles.closeButton}
          onClick={onClose}
          onMouseEnter={(e) =>
            (e.target.style.color = styles.closeButtonHover.color)
          } // Thêm hiệu ứng hover cho nút đóng
          onMouseLeave={(e) => (e.target.style.color = "#333")} // Reset màu khi không hover
        >
          ✖
        </button>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            onFocus={(e) => (e.target.style.border = styles.inputFocus.border)} // Thêm hiệu ứng khi input được chọn
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")} // Reset border khi mất focus
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onFocus={(e) => (e.target.style.border = styles.inputFocus.border)}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />
          <button
            style={styles.submitButton}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.submitButtonHover.backgroundColor)
            } // Hiệu ứng hover cho nút submit
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                styles.submitButton.backgroundColor)
            } // Reset màu khi không hover
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  isOpen: PropTypes.bool.isRequired, // 'isOpen' phải là kiểu boolean và bắt buộc
  onClose: PropTypes.func.isRequired, // 'onClose' phải là một function và bắt buộc
};

export default LoginForm;
