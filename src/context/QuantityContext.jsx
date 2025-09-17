import { createContext, useContext, useState } from "react";

const QuantityContext = createContext();
function QuantityContextProvider({ children }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
}

function useQuantity() {
  const context = useContext(QuantityContext);
  if (!context)
    throw new Error("Quantity context being used outise of quantity provider!");
  return context;
}

export { useQuantity, QuantityContextProvider };
