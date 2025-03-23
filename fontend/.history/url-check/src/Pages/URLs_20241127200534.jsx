import React from "react";

const URLs = () => {
  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#1a1a2e", // Nền tối
      color: "#d3d3d3", // Màu văn bản sáng
      padding: "2rem",
      width: "80%", // Điều chỉnh chiều rộng container
      margin: "0 auto",
      borderRadius: "10px", // Thêm bo góc cho container
    },
    icon: {
      fontSize: "3rem", // Giảm kích thước biểu tượng
      color: "#87cefa", // Màu xanh sáng
      marginBottom: "1rem",
    },
    inputWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.5rem",
    },
    textField: {
      width: "65%", // Điều chỉnh chiều rộng textfield
      padding: "0.8rem", // Cải thiện khoảng cách padding
      fontSize: "1rem",
      borderRadius: "5px 0 0 5px",
      border: "1px solid #444",
      backgroundColor: "#2e2e4d", // Màu nền textfield tối
      color: "#d3d3d3", // Màu chữ sáng cho textfield
      outline: "none",
      marginRight: "0.5rem", // Khoảng cách giữa textfield và nút
    },
    description: {
      fontSize: "0.9rem",
      color: "#b0b0c3", // Màu sáng nhẹ cho phần mô tả
      lineHeight: "1.5",
      marginTop: "1rem",
    },
    link: {
      color: "#87cefa", // Màu liên kết xanh sáng
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
        <button className="btn">Scan</button>
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

      {/* CSS cho nút Scan với hiệu ứng từ Uiverse.io */}
      <style>
        {`
        /* Nút Scan với hiệu ứng từ Uiverse.io */
        .btn {
          color: #ffffff;
          text-transform: uppercase;
          text-decoration: none;
          border: 2px solid #87cefa;
          padding: 12px 25px;
          font-size: 16px;
          cursor: pointer;
          font-weight: bold;
          background: transparent;
          position: relative;
          transition: all 1s;
          overflow: hidden;
          border-radius: 0 5px 5px 0;
        }

        .btn:hover {
          color: white;
        }

        .btn::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 0%;
          top: 0;
          left: -40px;
          transform: skewX(45deg);
          background-color: #87cefa;
          z-index: -1;
          transition: all 1s;
        }

        .btn:hover::before {
          width: 160%;
        }
        `}
      </style>
    </div>
  );
};

export default URLs;
