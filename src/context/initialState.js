import { fetchCart } from "../utils/localStorageFunctions";

const cartInfo = fetchCart();

export const initialState = {
  user: null,
  books: null,
  cartItems: cartInfo,
};
