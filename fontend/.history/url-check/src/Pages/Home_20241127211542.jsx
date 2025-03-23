import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom"; // Outlet giúp render các route con
import Navbar from "../Components/Navbar";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // Hook để điều hướng

  const styles = {
    body: {
      top: 0,
      left: 0,
      right: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#1a1a2e",
      color: "#d3d3d3",
      textAlign: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start", // Đảm bảo phần trên cùng cố định
      alignItems: "center",
      padding: "2rem",
      paddingTop: "120px",
      boxSizing: "border-box",
      position: "fixed", // Cố định giao diện
      overflow: "hidden", // Giúp nội dung không bị tràn ra ngoài khi cuộn
    },
    logo: {
      fontSize: "3.0rem",
      color: "#87cefa",
      fontWeight: "bold",
      marginBottom: "30px",
    },
    tagline: {
      fontSize: "0.8rem",
      lineHeight: "1.6", // Tăng line-height để dễ đọc hơn
      color: "#b0b0c3",
      marginBottom: "2rem",
      textAlign: "justify", // Căn lề hai bên
      // marginLeft: "5%", // Thêm khoảng cách bên trái
      // marginRight: "5%", // Thêm khoảng cách bên phải
      // paddingBottom: "1rem", // Thêm khoảng cách dưới để phần mô tả không bị sát dưới cùng
    },
    tabMenu: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      width: "300px",
      borderBottom: "2px solid #444",
      marginBottom: "2rem",
    },
    tab: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
      background: "none",
      color: "#d3d3d3",
      border: "none",
      cursor: "pointer",
      transition: "color 0.3s",
      flex: 1,
      textAlign: "center",
      position: "relative",
    },
    activeTab: {
      color: "#87cefa",
    },
    underline: {
      position: "absolute",
      bottom: "-2px",
      height: "2px",
      backgroundColor: "#87cefa",
      transition: "left 0.3s ease, width 0.3s ease",
    },
    uploadSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "2rem",
      position: "relative", // Chắc chắn rằng nội dung tab sẽ thay đổi mà không ảnh hưởng đến phần header
      top: "200px", // Điều chỉnh khoảng cách giữa header và phần dưới
    },
    footer: {
      fontSize: "0.8rem",
      lineHeight: "1.5",
      color: "#b0b0c3",
      marginTop: "auto",
      textAlign: "center",
    },
    link: {
      color: "#87cefa",
      textDecoration: "none",
    },
  };

  const tabs = [
    { name: "FILE", path: "file" },
    { name: "URL", path: "url" },
    { name: "SEARCH", path: "search" },
  ];

  const handleTabClick = (index, path) => {
    setActiveIndex(index);
    navigate(path); // Điều hướng đến route con
  };

  return (
    <>
      <Navbar />
      <div style={styles.body}>
        <header>
          <div style={styles.logo}>VIRUSTOTAL</div>
          <p style={styles.tagline}>
            Analyse suspicious files, domains, IPs, and URLs to detect malware
            and other breaches, automatically share them with the security
            community.
          </p>
        </header>

        <div style={styles.tabMenu}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              style={{
                ...styles.tab,
                ...(activeIndex === index ? styles.activeTab : {}),
              }}
              onClick={() => handleTabClick(index, tab.path)}
            >
              {tab.name}
            </button>
          ))}
          <div
            style={{
              ...styles.underline,
              width: `${100 / tabs.length}%`,
              left: `${(activeIndex / tabs.length) * 100}%`,
            }}
          />
        </div>

        {/* Render nội dung route con */}
        <div style={styles.uploadSection}>
          <Outlet />
        </div>

        <footer style={styles.footer}>
          <p>
            By submitting data above, you are agreeing to our{" "}
            <a href="#" style={styles.link}>
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" style={styles.link}>
              Privacy Notice
            </a>
            , and to the <strong>sharing of your sample submission</strong> with
            the security community. Please do not submit any personal
            information; we are not responsible for the contents of your
            submission.{" "}
            <a href="#" style={styles.link}>
              Learn more.
            </a>
          </p>
          <p>
            <a href="#" style={styles.link}>
              Want to automate submissions?
            </a>{" "}
            Check our{" "}
            <a href="#" style={styles.link}>
              API
            </a>
            , or access your{" "}
            <a href="#" style={styles.link}>
              API key
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
