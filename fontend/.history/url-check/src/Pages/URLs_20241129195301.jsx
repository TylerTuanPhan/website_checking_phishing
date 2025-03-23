import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiQrScan2Line } from "react-icons/ri";

// Styled-components for UI elements
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

const DialogBox = styled.div`
  background-color: #f44336;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const URLs = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // URL validation function
  const isValidUrl = (str) => {
    const pattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w .-]*)*\/?$/;
    return pattern.test(str);
  };

  const handleScan = () => {
    if (!url) {
      setError("Vui lòng nhập URL.");
      return;
    }

    if (!isValidUrl(url)) {
      setError("URL không hợp lệ. Vui lòng nhập lại.");
      return;
    }

    setError(""); // Clear error message
    const isPhishing = url.toLowerCase().includes("phish");
    navigate("/result", { state: { url, isPhishing } }); // Navigate to result page
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

      {error && (
        <DialogBox>
          <span>{error}</span>
          <CloseButton onClick={() => setError("")}>×</CloseButton>
        </DialogBox>
      )}

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
