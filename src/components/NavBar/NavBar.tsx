import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import styles from "./Navbar.module.css";

export function NavBar() {
  const { cart } = useCart();
  const { search, setSearch, category, setCategory } = useSearch();

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          Mini-ecommerce
        </Link>
      </div>

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
          <option value="todas">Todas las categorías</option>
          <option value="laptops">Laptops</option>
          <option value="audios">Audio</option>
          <option value="monitores">Monitores</option>
        </select>
      </div>

      <Link to="/cart" className={styles.cart}>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>{cart.length}</span>
      </Link>
    </nav>
  );
}