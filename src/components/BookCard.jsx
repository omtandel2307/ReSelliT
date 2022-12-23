import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const BookCard = ({
  bookName,
  ownerName,
  price,
  phoneNumber,
  description,
  imageURL,
  uid,
  userName,
  ownerEmail,
  id,
}) => {
  const [addToCart, setAddtoCart] = useState(false);
  const handleCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const item = {
      bookName,
      ownerName,
      price,
      phoneNumber,
      description,
      imageURL,
      uid,
      userName,
      ownerEmail,
      id,
    };
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [...cartItems, item],
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    toast("Added to Cart", {
      icon: "🛒",
      duration: 1000,
      id: id,
    });
  };
  const [{ cartItems }, dispatch] = useStateValue();
  return (
    <div className="py-6 cursor-pointer min-h-[200px]">
      <Toaster position="top-right" />
      <Link to={`/buybooks/${id}`}>
        <div className="flex max-w-md bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-lg overflow-hidden h-25">
          <div className="w-1/3 bg-cover">
            <img src={imageURL} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">{bookName}</h1>
            <h3 className="text-gray-400 font-semi-bold text-md">{userName}</h3>

            <p className="mt-2 text-gray-600 text-sm">{description}</p>
            <div className="flex item-center mt-2">
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">₹{price}</h1>
              {/* <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Cart
            </button> */}
              <MdOutlineShoppingCart
                className="h-6 w-6 rounded-sm hover:bg-black hover:text-white"
                onClick={handleCart}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
