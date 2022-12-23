import React from "react";
import MyBookCard from "../components/MyBookCard";
import { useStateValue } from "../context/StateProvider";

const MyBooks = () => {
  const [{ user }, dispatch] = useStateValue();
  const [{ books }, dipatch] = useStateValue();
  const filteredBooks = books.filter((book) => book.uid === user.uid);

  return (
    <div className="flex items-center justify-center flex-col ">
      <h1 className="text-3xl font-bold mt-2 shadow-sm">Your Added Books📚 </h1>
      <div className="min-h-[80vh] flex flex-wrap gap-4 items-center justify-center">
        {filteredBooks.length === 0
          ? "Add Some Books to Sell📚"
          : filteredBooks.map((book, id) => <MyBookCard key={id} {...book} />)}
      </div>
    </div>
  );
};

export default MyBooks;
