// pages/index.js
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./components/header/header.js";
import { Footer } from "./components/footer/footer.js";
import { Product } from "./components/products/Product.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
       <Product/>
        </main>
    </div>
  );
}
