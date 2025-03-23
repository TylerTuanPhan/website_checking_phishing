import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ImCreditCard } from "react-icons/im";

const Navbar = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 15px",
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
      borderRadius: "5px",
      background: "#183153",
      fontFamily: "'Montserrat', sans-serif",
      boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.2)",
      cursor: "pointer",
      border: "none",
      overflow: "hidden",
      width: "150px",
      height: "33px",
    },
    span: {
      textAlign: "center",
      textDecoration: "none",
      width: "100%",
      padding: "10px 20px",
      color: "#fff",
      fontSize: "13px",
      fontWeight: "400",
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
    loginForm: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
      zIndex: 2000,
      width: "300px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "transparent",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };

  return (
    <>
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
              href="/Contact"
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
              href="/About"
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
            onClick={() => setIsLoginFormVisible(true)}
          >
            <span style={styles.span}>LOGIN</span>
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

      {/* Login Form */}
      {isLoginFormVisible && (
        <>
          <div
            style={styles.overlay}
            onClick={() => setIsLoginFormVisible(false)}
          />
          <div style={styles.loginForm}>
            <button
              style={styles.closeButton}
              onClick={() => setIsLoginFormVisible(false)}
            >
              ×
            </button>
            <h3>Login</h3>
            <form>
              <div>
                <label>Username:</label>
                <input type="text" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
