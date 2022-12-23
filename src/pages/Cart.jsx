import React from "react";
import CartCard from "../components/CartCard";
import { useStateValue } from "../context/StateProvider";

const Cart = () => {
  const [{ cartItems }, dispatch] = useStateValue();

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mt-1 shadow-sm">Your Cart🛒 </h1>
      <div className="min-h-[90vh] flex flex-wrap gap-4 justify-center items-center">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => <CartCard {...item} />)
        ) : (
          <div>
            <h1 className="text-3xl font-bold">Cart is Empty!🧺</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
