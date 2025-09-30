import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QuantityProvider } from "./context/quantityContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <QuantityProvider>
        <App />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "oklch(98.7% 0.026 102.212)",
                color: "oklch(26.6% 0.065 152.934)",
              },
            },
            error: {
              style: {
                background: "oklch(57.7% 0.245 27.325)",
                color: "oklch(98.7% 0.026 102.212)",
              },
            },
          }}
        />
      </QuantityProvider>
    </CartProvider>
  </StrictMode>,
);
