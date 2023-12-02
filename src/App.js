import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
// import Footer from "./components/Footer"
import NavbarElements from "./components/NavbarElements.jsx";

function App() {
  return (
    <Router>
      <Navbar elements={NavbarElements} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
