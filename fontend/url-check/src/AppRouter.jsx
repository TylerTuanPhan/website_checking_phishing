import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import File from "./Pages/File";
import Url from "./Pages/URLs";
import Search from "./Pages/Search";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Result from "./Pages/Result";
import ResultEmail from "./Pages/Result_email"; // Import Result_email.jsx
import Dmm from "./Pages/dmm";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="file" element={<File />} />
          <Route path="url" element={<Url />} />
          <Route path="email" element={<Search />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Result_email" element={<ResultEmail />} /> {/* Thêm */}
        <Route path="/dmm" element={<Dmm />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
