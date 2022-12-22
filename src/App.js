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
import BookPage from "./pages/BookPage";
import MyBooks from "./pages/MyBooks";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestore } from "./firebase.config";

const App = () => {
  const [{ books }, dispatch] = useStateValue();
  console.log("appp", books);

  // const fetchData = async () => {
  //   await getAllBooks().then((res) => {
  //     console.log("App", res);
  //     dispatch({
  //       type: actionType.SET_BOOKS,
  //       books: res,
  //     });
  //   });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(
    () =>
      onSnapshot(
        query(collection(firestore, "books"), orderBy("id", "desc")),
        (snapshot) => {
          // console.log(snapshot.docs.map((doc) => doc.data()));
          dispatch({
            type: actionType.SET_BOOKS,
            books: snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          });
        }
      ),
    [firestore]
  );

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sellbooks" element={<SellBooks />} />
        <Route path="/buybooks" element={<BuyBooks />} />
        <Route path="/buybooks/:bookId" element={<BookPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mybooks" element={<MyBooks />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
