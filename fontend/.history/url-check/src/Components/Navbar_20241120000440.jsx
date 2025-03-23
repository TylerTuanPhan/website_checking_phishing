import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { ImCreditCard } from "react-icons/im";
import LoginForm from "../Pages/LoginForm"; // Import LoginForm component

const Navbar = () => {
  const [isLoginFormOpen, setLoginFormOpen] = useState(false); // State to control form visibility

  const styles = {
    // Existing styles
    // ...
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
            onClick={() => setLoginFormOpen(true)} // Open login form
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
      {isLoginFormOpen && <LoginForm onClose={() => setLoginFormOpen(false)} />}
    </>
  );
};

export default Navbar;
