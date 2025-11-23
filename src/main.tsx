import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
import './index.css'
import App from './App.tsx'
import { SearchProvider } from './context/SearchContext.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SearchProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </SearchProvider>
    </ThemeProvider>
  </StrictMode>,
)
