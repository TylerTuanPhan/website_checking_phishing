import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

        {/* Trang giới thiệu */}
        <Route path="/about" element={<About />} />

        {/* Trang liên hệ */}
        <Route path="/contact" element={<Contact />} />

        {/* Trang không tìm thấy */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
