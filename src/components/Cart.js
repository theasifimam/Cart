import ContextCart from "./ContextCart";
import { createContext, useReducer } from "react";
import { products } from "./products";
import { reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItems: 0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Delete Individual Element
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // Clear the Cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };
  return (
    <CartContext.Provider value={{ ...state, removeItem, clearCart }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
