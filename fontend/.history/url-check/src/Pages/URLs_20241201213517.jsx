import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate để điều hướng
import styled from "styled-components";
import { RiQrScan2Line } from "react-icons/ri";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const URLs = () => {
  const [url, setUrl] = useState(""); // Lưu giá trị URL người dùng nhập
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Trạng thái Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Nội dung thông báo lỗi
  const navigate = useNavigate(); // Điều hướng tới trang khác

  const handleScan = async () => {
    // Kiểm tra nếu không nhập gì
    if (!url) {
      setSnackbarMessage("Vui lòng nhập URL để quét.");
      setSnackbarOpen(true);
      return;
    }

    // Kiểm tra định dạng URL
    const urlPattern =
      /^(https?:\/\/)?([a-z0-9]+\.)+[a-z]{2,6}([/a-z0-9\w .-]*)*\/?$/i;
    if (!urlPattern.test(url)) {
      setSnackbarMessage("URL sai định dạng, vui lòng nhập lại.");
      setSnackbarOpen(true);
      return;
    }

    try {
      // Gửi URL tới backend FastAPI
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      console.log(,data)

      if (data.isPhishing !== undefined) {
        // Điều hướng đến trang Result và truyền dữ liệu URL và trạng thái
        navigate("/result", { state: { url, isPhishing: data.isPhishing } });
      } else {
        setSnackbarMessage("Lỗi khi xử lý URL.");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Lỗi:", error); // Ghi lại lỗi
      setSnackbarMessage("Lỗi kết nối tới server.");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container>
      <Icon>
        <RiQrScan2Line />
      </Icon>
      <InputWrapper>
        <TextField
          type="text"
          placeholder="Search or scan a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default URLs;
