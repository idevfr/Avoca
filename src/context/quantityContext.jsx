import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const quantityContext = createContext();

const initialValue = [
  {
    id: 1,
    quantity: 0,
  },
  {
    id: 2,
    quantity: 0,
  },
  {
    id: 3,
    quantity: 0,
  },
  {
    id: 4,
    quantity: 0,
  },
];

function QuantityProvider({ children }) {
  const [quantity, setQuantity] = useState();

  return (
    <quantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </quantityContext.Provider>
  );
}
function useQuantity() {
  const context = useContext(quantityContext);
  if (!context)
    throw new Error(
      "quantity context is being used outside of quantity provider",
    );
  return context;
}

export { QuantityProvider, useQuantity };
