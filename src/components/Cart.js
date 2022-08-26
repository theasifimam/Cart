import ContextCart from "./ContextCart";
import { createContext } from "react";
import { products } from "./products";

export const cartContext = createContext();

const Cart = () => {
  return (
    <cartContext.Provider value={products}>
      <ContextCart />
    </cartContext.Provider>
  );
};

export default Cart;
