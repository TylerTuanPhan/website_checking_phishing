import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

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
      </Routes>
    </Router>
  );
};

export default AppRouter;
