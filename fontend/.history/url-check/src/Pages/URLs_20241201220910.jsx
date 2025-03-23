import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate để điều hướng
import { RiQrScan2Line } from "react-icons/ri";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./URLs.css"; // Import file CSS
import { checkURLApi } from "../api";

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

    // // Kiểm tra định dạng URL
    // const urlPattern =
    //   /^(https?:\/\/)?([a-z0-9]+\.)+[a-z]{2,6}([/a-z0-9\w .-]*)*\/?$/i;
    // if (!urlPattern.test(url)) {
    //   setSnackbarMessage("URL sai định dạng, vui lòng nhập lại.");
    //   setSnackbarOpen(true);
    //   return;
    // }

    try {
      // Gửi URL tới backend FastAPI
      const data = await checkURLApi(url);
      console.log("data", data);
    
      if (data.result === "Legitimate") {
        // Điều hướng đến trang Result và truyền dữ liệu URL và trạng thái
        navigate("/result", { state: { url, isPhishing: data.isPhishing } });
      } else if (data.result === "Phishing") {
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
    
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="container">
      <div className="icon">
        <RiQrScan2Line />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search or scan a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="text-field"
        />
        <button className="pushable-button" onClick={handleScan}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"> Scan </span>
        </button>
      </div>
      <p className="description">
        By submitting data above, you are agreeing to our{" "}
        <a href="#" className="link">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="link">
          Privacy Notice
        </a>
        , and to the <strong>sharing of your URL submission</strong> with the
        security community. Please do not submit any personal information; we
        are not responsible for the contents of your submission.{" "}
        <a href="#" className="link">
          Learn more.
        </a>
      </p>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default URLs;
