import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

const cartContext = createContext();
function CartProvider({ children }) {
  const [cart, useCart] = useState([]);
  const [value, setValue] = useLocalStorageState(cart, "items");
  function addToCart(obj) {
    useCart((cart) => [...cart, obj]);
    setValue((cart) => [...cart, obj]);
  }
  return (
    <cartContext.Provider value={{ cart, addToCart, value, setValue }}>
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  return useContext(cartContext);
}

export { CartProvider, useCart };
