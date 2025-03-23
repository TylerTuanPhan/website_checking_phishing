import React, { useState } from "react";
import styled from "styled-components";
import { RiQrScan2Line } from "react-icons/ri"; // Import biểu tượng
import { useNavigate } from "react-router-dom"; // Import useNavigate để điều hướng trang

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
  const navigate = useNavigate(); // Hook để điều hướng trang

  const handleScanClick = () => {
    if (url) {
      // Nếu có URL, điều hướng sang trang kết quả và truyền URL vào query parameters
      navigate(`/result?url=${url}`);
    }
  };

  return (
    <Container>
      <Icon>
        <RiQrScan2Line /> {/* Thêm biểu tượng scan QR */}
      </Icon>
      <InputWrapper>
        <TextField
          type="text"
          placeholder="Search or scan a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)} // Cập nhật giá trị URL
        />
        <PushableButton onClick={handleScanClick}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"> Scan </span>
        </PushableButton>
      </InputWrapper>
    </Container>
  );
};

export default URLs;
