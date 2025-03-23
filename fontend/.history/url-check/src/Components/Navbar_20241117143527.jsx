const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      height: "45px",
      backgroundColor: "#192841",
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    },
    navLinks: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
    },
    navLink: {
      textDecoration: "none",
      color: "white",
      fontSize: "16px",
      transition: "color 0.3s",
    },
    navLinkHover: {
      color: "#1b85db",
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
      transition: "background-color 0.3s, color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#1b85db",
      color: "white",
    },
  };

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>Σ</div>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) =>
              (e.target.style.color = styles.navLinkHover.color)
            }
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) =>
              (e.target.style.color = styles.navLinkHover.color)
            }
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            style={styles.navLink}
            onMouseEnter={(e) =>
              (e.target.style.color = styles.navLinkHover.color)
            }
            onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
          >
            About
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
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
        >
          Sign in
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.color = styles.buttonHover.color;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.color = styles.button.color;
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
