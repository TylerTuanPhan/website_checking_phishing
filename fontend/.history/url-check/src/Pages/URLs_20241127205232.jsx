import styled from "styled-components";
import { RiQrScan2Line } from "react-icons/ri"; // Import biểu tượng

// Định nghĩa các styled-components
const Container = styled.div`
  text-align: center;
  background-color: #1a1a2e;
  color: #d3d3d3;
  padding: 3rem;
  width: 50%; // Giảm độ rộng của container để giao diện nhìn gọn gàng hơn
  margin: 0 auto;
  border-radius: 10px; // Thêm border-radius cho container
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); // Thêm bóng mờ cho container
`;

const Icon = styled.div`
  font-size: 6rem;
  color: #87cefa;
  margin-bottom: 1.5rem; /* Giảm khoảng cách dưới */
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem; /* Tăng khoảng cách dưới */
  gap: 10px; // Tăng khoảng cách giữa input và button
`;

const TextField = styled.input`
  width: 70%;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
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
  font-size: 1rem;
  color: #b0b0c3;
  line-height: 1.6;
  margin-top: 2rem; /* Thêm khoảng cách giữa button và mô tả */
`;

const Link = styled.a`
  color: #87cefa;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const PushableButton = styled.button`
  position: relative;
  background: transparent;
  padding: 10px 20px;
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
    padding: 12px 24px; /* Tăng kích thước padding để nút nhìn lớn hơn */
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    transform: translateY(-2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .front {
    transform: translateY(-4px);
  }

  &:active .front {
    transform: translateY(-1px);
  }

  &:hover .shadow {
    transform: translateY(2px);
  }

  &:active .shadow {
    transform: translateY(1px);
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const URLs = () => {
  return (
    <Container>
      <Icon>
        <RiQrScan2Line /> {/* Thêm biểu tượng scan QR */}
      </Icon>
      <InputWrapper>
        <TextField type="text" placeholder="Search or scan a URL" />
        <PushableButton>
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
