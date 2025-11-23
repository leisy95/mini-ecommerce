import { ModalBase } from "./ModalBase";
import styles from "./ModalButtons.module.css";

interface Props {
    total: number;
    onConfirmPay: () => void;
    onClose: () => void;
}

export function ConfirmPayModal({ total, onConfirmPay, onClose }: Props) {
    return (
        <ModalBase
            title="Confirmar pago"
            onClose={onClose}
            footer={
                <>
                    <button className="btn btn-secondary" onClick={onClose}>
                        Cancelar
                    </button>

                    <button className={styles.buttonPrimary} onClick={onConfirmPay}>
                        Confirmar pago
                    </button>
                </>
            }
        >
            <p>¿Deseas realizar el pago?</p>
            <p><strong>Total a pagar:</strong> ${total.toFixed(2)}</p>
        </ModalBase>
    );
}