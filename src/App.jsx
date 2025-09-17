import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Oil from "./pages/Oil";
import Bag from "./pages/Bag";
import Bundle from "./pages/Bundle";
import Pourer from "./pages/Pourer";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<AppLayout />}>
          <Route path="/oil" element={<Oil />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/pourer" element={<Pourer />} />
          <Route path="/bundle" element={<Bundle />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
