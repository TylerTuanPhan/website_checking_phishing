import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import File from "./Pages/File";
import Url from "./Pages/Url";
import Search from "./Pages/Search";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Route con cho các tab */}
          <Route path="file" element={<File />} />
          <Route path="url" element={<Url />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
