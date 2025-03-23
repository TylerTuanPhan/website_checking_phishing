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
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
