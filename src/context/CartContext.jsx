import { createContext, useContext } from "react";

const CartContext = createContext();
function CartContextProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}
function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("using cart context outise of the cart provider !");
  return context;
}
