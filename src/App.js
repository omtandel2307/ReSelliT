import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import BuyBooks from "./pages/BuyBooks";
import LandingPage from "./pages/LandingPage";
import SellBooks from "./pages/SellBooks";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sellbooks" element={<SellBooks />} />
        <Route path="/buybooks" element={<BuyBooks />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
