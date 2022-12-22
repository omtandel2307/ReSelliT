import React from "react";
import BookCard from "../components/BookCard";
import { useStateValue } from "../context/StateProvider";
import Loader from "./Loader";

const BuyBooks = () => {
  // const [booksArr, setBooksArr] = useState([]);
  const [{ books }, dipatch] = useStateValue();

  return (
    <div className="min-h-[90vh] flex flex-wrap gap-4 justify-center items-center">
      {books ? (
        books.map((book) => <BookCard key={book.id} {...book} />)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BuyBooks;
