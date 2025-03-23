import { RiHomeLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ImCreditCard } from "react-icons/im";

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      height: "50px",
      backgroundColor: "#192841",
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Poppins', sans-serif",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      fontSize: "42px",
      fontWeight: "700",
      color: "#1b85db",
      cursor: "pointer",
      letterSpacing: "2px",
    },
    logoText: {
      marginLeft: "8px",
      fontSize: "16px",
      fontWeight: "500",
    },
    navLinks: {
      display: "flex",
      gap: "50px",
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
      fontSize: "10px",
      fontWeight: "500",
      transition: "color 0.3s, transform 0.3s",
    },
    navLinkHover: {
      color: "#1b85db",
      transform: "scale(1.1)",
    },
    icon: {
      fontSize: "17px",
      marginBottom: "4px",
    },
    authButtons: {
      display: "flex",
      gap: "10px",
    },
    signUpButton: {
      outline: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#40B3A2",
      minWidth: "200px",
      border: "none",
      borderRadius: "4px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
      padding: "16px 20px",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      cursor: "pointer",
      overflow: "hidden",
      position: "relative",
      transition: "opacity 0.3s",
    },
    signUpButtonHover: {
      opacity: "0.95",
    },
    rippleEffect: {
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      borderRadius: "50%",
      animation: "ripple 0.6s linear infinite",
    },
  };

  const handleRippleEffect = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.position = "absolute";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    ripple.style.borderRadius = "50%";
    ripple.style.animation = "ripple 0.6s linear";

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return (
    <div style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <div>Σ</div>
        <div style={styles.logoText}>URL SCAN</div>
      </div>

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
            <RiHomeLine style={styles.icon} />
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
            <MdOutlineContacts style={styles.icon} />
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
            <IoIosInformationCircleOutline style={styles.icon} />
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
            <ImCreditCard style={styles.icon} />
            Cards
          </a>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div style={styles.authButtons}>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.signUpButtonHover.opacity;
          }}
        >
          Sign in
        </button>
        <button
          style={styles.signUpButton}
          onMouseEnter={(e) => {
            e.target.style.opacity = styles.signUpButtonHover.opacity;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = "1";
          }}
          onClick={handleRippleEffect}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
