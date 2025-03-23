import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-router-dom"; // Thêm dòng này

// Styled Components
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
  margin-bottom: -15rem;
  transform: translateY(-240px);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
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

const ErrorMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f44336;
  color: white;
  font-size: 1rem;
  border-radius: 6px;
  width: 80%;
  margin: 1rem auto;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Description = styled.p`
  font-size: 0.7rem;
  color: #b0b0c3;
  line-height: 1.6;
  margin-top: 2rem;
  text-align: justify;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 1rem;
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
    border-radius: 6px;
    filter: blur(1px);
    will-change: transform;
    transform: translateY(1px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .edge {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 6px;
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
    border-radius: 6px;
    background: hsl(248, 53%, 58%);
    padding: 8px 16px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    transform: translateY(-2px);
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
    transform: translateY(-1px);
    transition: transform 34ms;
  }

  &:hover .shadow {
    transform: translateY(2px);
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
  const [url, setUrl] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const validateUrl = (inputUrl) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/; // Kiểm tra định dạng URL
    return regex.test(inputUrl);
  };

  const handleScan = () => {
    if (!url || !validateUrl(url)) {
      setError("Vui lòng nhập một URL hợp lệ!");
      return;
    }
    const isPhishing = url.toLowerCase().includes("phish");
    navigate("/result", { state: { url, isPhishing } });
  };

  return (
    <Container>
      <Icon>
        <RiQrScan2Line />
      </Icon>
      <InputWrapper>
        <TextField
          type="text"
          placeholder="Nhập URL cần kiểm tra"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <PushableButton onClick={handleScan}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">Scan</span>
        </PushableButton>
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
      {/* Hiển thị thông báo lỗi */}
      <Description>
        Bằng cách gửi dữ liệu trên, bạn đồng ý với{" "}
        <Link href="#">Điều khoản dịch vụ</Link> và{" "}
        <Link href="#">Thông báo quyền riêng tư</Link>, và{" "}
        <strong>chia sẻ URL của bạn</strong> với cộng đồng bảo mật.
      </Description>
    </Container>
  );
};

export default URLs;
