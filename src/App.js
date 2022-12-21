import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Nav } from "./components/Nav";
import BuyBooks from "./pages/BuyBooks";
import LandingPage from "./pages/LandingPage";
import SellBooks from "./pages/SellBooks";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import { getAllBooks } from "./utils/firebaseFunctions";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const App = () => {
  const [{ books }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllBooks().then((res) => {
      dispatch({
        type: actionType.SET_BOOKS,
        books: res,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sellbooks" element={<SellBooks />} />
        <Route path="/buybooks" element={<BuyBooks />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
