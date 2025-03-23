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
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      background: "#183153",
      fontFamily: "'Montserrat', sans-serif",
      boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      border: "none",
      overflow: "hidden",
      padding: "8px 16px",
      width: "100px", // Đặt chiều rộng cố định nếu muốn.
      height: "50px", // Đặt chiều cao cố định.
    },
    span: {
      textAlign: "center",
      textDecoration: "none",
      width: "100%",
      padding: "10px 20px",
      color: "#fff",
      fontSize: "12px",
      fontWeight: "550",
      letterSpacing: "0.3em",
      zIndex: 20,
      transition: "all 0.3s ease-in-out",
    },
    after: {
      content: "''",
      width: "0%",
      height: "100%",
      background: "#ffd401",
      position: "absolute",
      transition: "all 0.4s ease-in-out",
      right: 0,
    },
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
            href="/"
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
          style={styles.signUpButton}
          onMouseEnter={(e) => {
            const after = e.currentTarget.querySelector(".after");
            after.style.width = "100%";
            after.style.left = "0";
            after.style.right = "auto";
          }}
          onMouseLeave={(e) => {
            const after = e.currentTarget.querySelector(".after");
            after.style.width = "0%";
            after.style.left = "auto";
            after.style.right = "0";
          }}
        >
          <span style={styles.span}>Sign Up</span>
          <div
            className="after"
            style={{
              ...styles.after,
              left: "auto",
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
