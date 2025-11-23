import { useState, useEffect } from "react";
import { ModalBase } from "./ModalBase";
import type { Product } from "../../types/Product";

import styles from "./ModalButtons.module.css";

interface Props {
    product: Product | null;
    onConfirm: (product: Product, quantity: number) => void;
    onClose: () => void;
}

export function QuantityModal({ product, onConfirm, onClose }: Props) {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(1);
    }, [product]);

    if (!product) return null;

    return (
        <ModalBase
            title="Agregar al carrito"
            onClose={onClose}
            footer={
                <>
                    <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                    <button className={styles.buttonPrimary} onClick={() => onConfirm(product, quantity)}>
                        Confirmar
                    </button>
                </>
            }
        >
            <p><strong>Producto:</strong> {product.nombre}</p>

            <label className="form-label">Cantidad:</label>
            <input
                type="number"
                className="form-control"
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
        </ModalBase>
    );
}