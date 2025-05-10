import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/about">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/contact">Liên hệ</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
