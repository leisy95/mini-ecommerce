import { useState, useEffect } from "react";
import productsData from "../data/products.json";
import type { Product } from "../types/Product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return { products };
};