import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CartPage } from "./pages/cartPage/CartPage";
import { NavBar } from "./components/NavBar/NavBar";
import ProductListPage from "./pages/productList/ProductListPage";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>x
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}