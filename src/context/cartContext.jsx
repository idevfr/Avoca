import { createContext, useContext, useState } from "react";

const cartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function add(obj) {
    setCart((cart) => [...cart, obj]);
  }
  function remove(id) {
    setCart((cart) => cart.filter((c) => c.id !== id));
  }
  function edit(id, updatedObj) {
    setCart((cart) =>
      cart.map((c) => (c.id === id ? { ...c, ...updatedObj } : c)),
    );
  }
  return (
    <cartContext.Provider value={{ cart, add, remove, edit }}>
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  return useContext(cartContext);
}

export { CartProvider, useCart };
