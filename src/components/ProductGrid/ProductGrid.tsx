import type { Product } from "../../types/Product";
import styles from "./ProductGrid.module.css";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function ProductGrid({ products, onSelect }: Props) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>

          <h5 className={styles.title}>{product.nombre}</h5>

          <p className={styles.price}>${product.precio.toFixed(2)}</p>

          <button
            className={styles.button}
            onClick={() => onSelect(product)}
          >
            <i className="fa-solid fa-cart-plus"></i>
            Agregar
          </button>

        </div>
      ))}
    </div>
  );
}