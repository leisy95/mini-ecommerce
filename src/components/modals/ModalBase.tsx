import styles from "./Modal.module.css";

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    footer?: React.ReactNode;
}

export function ModalBase({ title, children, onClose, footer }: ModalProps) {
    return (
        <div className={`modal show d-block ${styles.backdrop}`}>
            <div className="modal-dialog">
                <div className={`modal-content ${styles.modalContent}`}>

                    <div className={`modal-header ${styles.modalHeader}`}>
                        <h5 className={`modal-title ${styles.modalTitle}`}>{title}</h5>

                        <button
                            className={`btn-close ${styles.closeBtn}`}
                            onClick={onClose}
                        ></button>
                    </div>

                    <div className={`modal-body ${styles.modalBody}`}>
                        {children}
                    </div>

                    {footer && (
                        <div className={`modal-footer ${styles.modalFooter}`}>
                            {footer}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}