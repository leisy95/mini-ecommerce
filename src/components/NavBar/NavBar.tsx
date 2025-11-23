import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export function NavBar() {
  const { cart } = useCart();
  const { search, setSearch, category, setCategory } = useSearch();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          Mini-ecommerce
        </Link>
      </div>

      {/* Filtro buscador */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar productos..."
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={styles.categorySelect}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="todas">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="audios">Audio</option>
          <option value="monitores">Monitores</option>
        </select>
      </div>

      {/* icono tema y carrito */}
      <div className={styles.right}>

        <button className={styles.themeBtn} onClick={toggleTheme}>
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </button>

        <Link to="/cart" className={styles.cart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span>{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}