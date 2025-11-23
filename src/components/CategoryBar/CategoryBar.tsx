import styles from "./CategoryBar.module.css";

interface Props {
    selected: string;
    onChange: (category: string) => void;
}

export default function CategoryBar({ selected, onChange }: Props) {
    const categories = [
        { id: "todas", label: "Todas", icon: "fa-solid fa-border-all" },
        { id: "audios", label: "Audios", icon: "fa-solid fa-headphones" },
        { id: "monitores", label: "Monitores", icon: "fa-solid fa-tv" },
        { id: "laptops", label: "Laptops", icon: "fa-solid fa-laptop" },
    ];

    return (
        // Aqui mostramos el listado de categorias con iconos
        <div className={styles.container}>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    className={`${styles.item} ${selected === cat.id ? styles.active : ""}`}
                    onClick={() => onChange(cat.id)}
                >
                    <div className={styles.circle}>
                        <i className={`${cat.icon} ${styles.icon}`} />
                    </div>
                    <div className={styles.label}>{cat.label}</div>
                </button>
            ))}
        </div>
    );
}