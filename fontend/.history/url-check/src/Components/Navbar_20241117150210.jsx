import { FaHome, FaPhoneAlt, FaInfoCircle, FaCreditCard } from "react-icons/fa";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      height: "50px",
      backgroundColor: "#192841", // Màu nền navbar
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
      fontFamily: "'Poppins', sans-serif", // Font chữ hiện đại
    },
    logo: {
      fontSize: "42px",
      fontWeight: "700", // Làm chữ đậm để hiện đại hơn
      color: "#1b85db",
      cursor: "pointer",
      letterSpacing: "2px", // Thêm khoảng cách giữa các chữ
    },
    navLinks: {
      display: "flex",
      gap: "50px", // Khoảng cách giữa các mục
      listStyle: "none",
      justifyContent: "center",
      alignItems: "center",
    },
    navLink: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textDecoration: "none",
      color: "white",
      fontSize: "14px",
      fontWeight: "500", // Font chữ nhẹ hơn nhưng vẫn hiện đại
      transition: "color 0.3s, transform 0.3s",
    },
    navLinkHover: {
      color: "#1b85db",
      transform: "scale(1.1)", // Phóng to khi hover
    },
    icon: {
      fontSize: "18px",
      marginBottom: "4px",
    },
    authButtons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      border: "1px solid #1b85db",
      backgroundColor: "transparent",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "600", // Đậm hơn để nổi bật
      transition: "background-color 0.3s, color 0.3s",
      letterSpacing: "1px", // Thêm khoảng cách chữ để tạo cảm giác hiện đại
    },
    buttonHover: {
      backgroundColor: "#1b85db",
      color: "white",
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>Σ</div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <FaHome style={styles.icon} />
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <FaPhoneAlt style={styles.icon} />
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <FaInfoCircle style={styles.icon} />
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) => {
              e.target.style.color = styles.navLinkHover.color;
              e.target.style.transform = styles.navLinkHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "none";
            }}
          >
            <FaCreditCard style={styles.icon} />
            Cards
          </a>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div style={styles.authButtons}>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
