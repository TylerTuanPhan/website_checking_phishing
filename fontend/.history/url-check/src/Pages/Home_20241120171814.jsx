import Navbar from "../Components/Navbar";

const Home = () => {
  // Inline styles
  const styles = {
    root: {
      margin: "0", // Reset margin
      padding: "0", // Reset padding
      boxSizing: "border-box", // Đảm bảo kích thước chính xác
      height: "100vh", // Chiều cao toàn màn hình
      width: "100vw", // Chiều rộng toàn màn hình
      overflow: "hidden", // Ẩn mọi nội dung tràn ra ngoài
      backgroundColor: "#1a1a2e", // Màu nền toàn màn hình
      backgroundSize: "cover", // Phủ kín background
      backgroundPosition: "center", // Căn chỉnh background ở giữa
      backgroundImage: "url('/path-to-your-image.png')", // Thay URL bằng ảnh của bạn
      display: "flex", // Dùng Flexbox để căn giữa
      flexDirection: "column",
      justifyContent: "space-between", // Phân chia hợp lý các thành phần
      alignItems: "center",
    },
    content: {
      flex: 1,
      width: "100%", // Phủ kín nội dung theo chiều ngang
    },
    logo: {
      fontSize: "2.5rem",
      color: "#87cefa",
      fontWeight: "bold",
      margin: "1rem 0",
    },
    footer: {
      fontSize: "0.8rem",
      color: "#b0b0c3",
      textAlign: "center",
      margin: "1rem 0",
    },
    link: {
      color: "#87cefa",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.root}>
      <Navbar />
      <div style={styles.content}>
        <div style={styles.logo}>VIRUSTOTAL</div>
        {/* Nội dung khác */}
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
          .
        </p>
      </footer>
    </div>
  );
};

export default Home;
