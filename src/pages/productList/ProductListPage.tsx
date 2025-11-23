import { useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { useProducts } from "../../hooks/useProducts";
import type { Product } from "../../types/Product";
import { QuantityModal } from "../../components/modals/QuantityModal";

import CategoryBar from "../../components/CategoryBar/CategoryBar";

import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";

export default function ProductListPage() {
  const { products } = useProducts();
  const { addToCart } = useCart();

  
  const { search, category, setCategory } = useSearch();

  const [selected, setSelected] = useState<Product | null>(null);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      category === "todas" ? true : p.categoria === category;

    const matchesSearch =
      search.trim() === ""
        ? true
        : p.nombre.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleConfirm = (product: Product, quantity: number) => {
    addToCart(product, quantity);
    setSelected(null);
  };

  return (
    <>
      <div className="container py-5">
        
        <CategoryBar selected={category} onChange={setCategory} />

        <h1 className="mb-4 text-center">Productos Disponibles</h1>

        <ProductGrid products={filteredProducts} onSelect={setSelected} />
      </div>

      <QuantityModal
        product={selected}
        onConfirm={handleConfirm}
        onClose={() => setSelected(null)}
      />
    </>
  );
}