'use client';

import { useEffect, useState } from "react";
import styles from "./lienhe.module.css";
import { Product } from "../products/Product";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch products");
        }

        setProducts(data.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className={styles.content}>Đang tải sản phẩm...</div>;
  if (error) return <div className={styles.content}>Lỗi: {error}</div>;

  return (
    <div className={styles.content}>
      <div className={styles.mainContent}>
        {products.length === 0 ? (
          <p>Không có sản phẩm nào.</p>
        ) : (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
