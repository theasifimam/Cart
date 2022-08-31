import ContextCart from "./ContextCart";
import { createContext, useReducer } from "react";
import { products } from "./products";

export const cartContext = createContext();

const Cart = () => {
  const [state, dispatch] = useReducer(first, second, third);
  return (
    <cartContext.Provider value={products}>
      <ContextCart />
    </cartContext.Provider>
  );
};

export default Cart;
