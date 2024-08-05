import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import MyPortfolio from "./Components/MyPortfolio";
import DownloadResume from "./Components/DownloadResume";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/resume" element={<DownloadResume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
