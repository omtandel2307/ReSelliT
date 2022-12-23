import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const CartCard = ({
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
  const [{ cartItems }, dispatch] = useStateValue();

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newcart = cartItems.filter((cartItem) => cartItem.id !== id);
    console.log(newcart);
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: newcart,
    });
    toast.success("Book Removed From Cart!");
  };
  return (
    <div className="py-6 cursor-pointer min-h-[200px]">
      <Toaster position="top-center" />
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
              <button onClick={handleDelete}>
                <a
                  href="#_"
                  class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                >
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                    Delete
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CartCard;
