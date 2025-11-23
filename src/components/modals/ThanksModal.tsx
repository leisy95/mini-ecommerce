import { ModalBase } from "./ModalBase";

import styles from "./ModalButtons.module.css";

interface Props {
    onClose: () => void;
    onContinue: () => void;
}

export function ThanksModal({ onClose, onContinue }: Props) {
    return (
        <ModalBase
            title="¡Gracias por tu compra!"
            onClose={onClose}
            footer={
                <button className={styles.buttonPrimary} onClick={onContinue}>
                    Seguir comprando
                </button>
            }
        >
            <p>Tu compra ha sido procesada correctamente.</p>
        </ModalBase>
    );
}