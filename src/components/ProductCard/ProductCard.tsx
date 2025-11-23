import styles from "./ProductCard.module.css";
import type { Product } from "../../types/Product";

interface Props {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: Props) {
    return (
        <div className={styles.col}>
            <div className={styles.card}>
                <div className={styles.body}>
                    <h5 className={styles.title}>{product.nombre}</h5>
                    <p className={styles.price}>${product.precio.toFixed(2)}</p>
                </div>


                <div className={styles.footer}>
                    <button
                        className={styles.button}
                        onClick={() => onAddToCart(product)}
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}