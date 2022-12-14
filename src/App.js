import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
