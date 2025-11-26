import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ThanksModal } from "../../components/modals/ThanksModal";
import { ConfirmPayModal } from "../../components/modals/ConfirmPayModal";

import styles from "./CartPage.module.css";


export function CartPage() {
    const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

    const [showConfirmPay, setShowConfirmPay] = useState(false);
    const [showThanks, setShowThanks] = useState(false);


    const navigate = useNavigate();

    const totalGeneral = cart.reduce(
        (acc, item) => acc + item.precio * item.quantity,
        0
    );

    // Funcion restar cantidades
    const restarCantidades = () => {
        cart.forEach(item => {
            if (item.quantity > 1) {
                updateQuantity(item.id, item.quantity - 1);
            }
        });
    };

    const handlePay = () => {
        clearCart();
        setShowConfirmPay(false);
        setShowThanks(true);
    };

    return (
        <div className={styles.cartContainer}>

            <h2 className={styles.title}>Carrito de Compras</h2>

            {cart.length === 0 && (
                <p className={styles.empty}>No hay productos en el carrito.</p>
            )}

            {cart.map((item) => {
                const subtotal = item.precio * item.quantity;

                return (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.info}>
                            <h5 className={styles.name}>{item.nombre}</h5>
                            <p className={styles.price}>${item.precio}</p>
                        </div>

                        {/* Cantidad */}
                        <div className={styles.quantity}>
                            <button
                                className={styles.qtyButton}
                                onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>

                            <span className={styles.qtyNumber}>{item.quantity}</span>

                            <button
                                className={styles.qtyButton}
                                onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                }
                            >
                                +
                            </button>
                        </div>

                        <div className={styles.subtotal}>
                            <p>Subtotal:</p>
                            <strong>${subtotal.toFixed(2)}</strong>
                        </div>

                        <button
                            className={styles.remove}
                            onClick={() => removeFromCart(item.id)}
                        >
                            X
                        </button>
                    </div>
                );
            })}

            {cart.length > 0 && (
                <div className={styles.summary}>
                    <h4>
                        Total General: <span>${totalGeneral.toFixed(2)}</span>
                    </h4>

                    <button
                        className={styles.checkoutBtn}
                        onClick={() => setShowConfirmPay(true)}
                    >
                        Realizar Pago
                    </button>

                    <button
                        className={styles.checkoutBtn}
                        onClick={restarCantidades}
                    >
                        Restar cantidad
                    </button>
                </div>
            )}

            {/* Modal Confirmar */}
            {showConfirmPay && (
                <ConfirmPayModal
                    total={totalGeneral}
                    onConfirmPay={handlePay}
                    onClose={() => setShowConfirmPay(false)}
                />
            )}

            {/* Modal Agradecimineto */}
            {showThanks && (
                <ThanksModal
                    onClose={() => setShowThanks(false)}
                    onContinue={() => {
                        setShowThanks(false);
                        navigate("/");
                    }}
                />
            )}
        </div>
    );
}