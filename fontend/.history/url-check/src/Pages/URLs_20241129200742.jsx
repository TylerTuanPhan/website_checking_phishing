import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate để điều hướng
import styled, { keyframes } from "styled-components";
import { RiQrScan2Line } from "react-icons/ri"; // Import biểu tượng

// Định nghĩa các styled-components
const Container = styled.div`
  text-align: center;
  background-color: #1a1a2e;
  color: #d3d3d3;
  padding: 2rem;
  width: 60%;
  margin: 0 auto;
`;

const Icon = styled.div`
  font-size: 6rem;
  color: #87cefa;
  margin-bottom: -15rem; /* Giảm khoảng cách dưới */
  transform: translateY(-240px); /* Di chuyển lên trên một chút */
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 5px;
`;

const TextField = styled.input`
  width: 70%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #2e2e4d;
  color: #d3d3d3;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #87cefa;
    background-color: #333;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MessageBox = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff6f61;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${slideDown} 0.2s ease-in-out;
  z-index: 9999; /* Đặt z-index cao để nằm trên các thành phần khác */
  pointer-events: none; /* Tránh can thiệp vào các sự kiện người dùng */
`;

const Description = styled.p`
  font-size: 0.7rem;
  color: #b0b0c3;
  line-height: 1.6;
  margin-top: 2rem;
  text-align: justify; /* Căn lề hai bên cho văn bản */
  margin-left: 10%; /* Thêm khoảng cách bên trái để căn lề đẹp hơn */
  margin-right: 10%; /* Thêm khoảng cách bên phải */
  padding-bottom: 1rem; /* Thêm khoảng cách dưới cho mô tả */
`;

const Link = styled.a`
  color: #87cefa;
  text-decoration: none;
`;

const PushableButton = styled.button`
  position: relative;
  background: transparent;
  padding: 0px;
  border: none;
  cursor: pointer;
  outline-offset: 4px;
  outline-color: deeppink;
  transition: filter 250ms;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: hsl(226, 25%, 69%);
    border-radius: 6px; /* Giảm border-radius */
    filter: blur(1px); /* Giảm độ mờ của shadow */
    will-change: transform;
    transform: translateY(1px); /* Giảm hiệu ứng di chuyển */
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 6px; /* Giảm border-radius */
    background: linear-gradient(
      to right,
      hsl(248, 39%, 39%) 0%,
      hsl(248, 39%, 49%) 8%,
      hsl(248, 39%, 39%) 92%,
      hsl(248, 39%, 29%) 100%
    );
  }

  .front {
    display: block;
    position: relative;
    border-radius: 6px; /* Giảm border-radius */
    background: hsl(248, 53%, 58%);
    padding: 8px 16px; /* Giảm padding */
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px; /* Giảm khoảng cách chữ */
    font-size: 0.8rem; /* Giảm kích thước font */
    transform: translateY(-2px); /* Giảm hiệu ứng di chuyển */
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .front {
    transform: translateY(-4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .front {
    transform: translateY(-1px); /* Giảm hiệu ứng khi nhấn */
    transition: transform 34ms;
  }

  &:hover .shadow {
    transform: translateY(2px); /* Giảm hiệu ứng di chuyển shadow */
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const URLs = () => {
  const [url, setUrl] = useState(""); // Lưu giá trị URL người dùng nhập
  const [message, setMessage] = useState(""); // Lưu thông báo lỗi
  const navigate = useNavigate(); // Khởi tạo hàm điều hướng

  const handleScan = () => {
    if (!url.trim()) {
      setMessage("Hãy nhập URL muốn Scan");
      setTimeout(() => setMessage(""), 400); // Tự động ẩn sau 0.4 giây
      return;
    }
    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/i;
    if (!urlPattern.test(url)) {
      setMessage("URL không đúng định dạng");
      setTimeout(() => setMessage(""), 400); // Tự động ẩn sau 0.4 giây
      return;
    }
    setMessage(""); // Xóa lỗi nếu không có vấn đề
    const isPhishing = url.toLowerCase().includes("phish"); // Kiểm tra URL có chứa từ "phish"
    navigate("/result", { state: { url, isPhishing } }); // Chuyển hướng tới Result và gửi thông tin
  };

  return (
    <Container>
      {message && <MessageBox>{message}</MessageBox>}{" "}
      {/* Hiển thị messagebox */}
      <Icon>
        <RiQrScan2Line /> {/* Thêm biểu tượng scan QR */}
      </Icon>
      <InputWrapper>
        <TextField
          type="text"
          placeholder="Search or scan a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)} // Lấy giá trị URL nhập vào
        />
        <PushableButton onClick={handleScan}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"> Scan </span>
        </PushableButton>
      </InputWrapper>
      <Description>
        By submitting data above, you are agreeing to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Notice</Link>, and to the{" "}
        <strong>sharing of your URL submission</strong> with the security
        community. Please do not submit any personal information; we are not
        responsible for the contents of your submission.{" "}
        <Link href="#">Learn more.</Link>
      </Description>
    </Container>
  );
};

export default URLs;
