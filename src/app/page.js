"use client"; // this is a client component
import Image from "next/image"; 
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hello from "../../components/Hello";
import Products from "../../components/Products"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello />
      <Products/>
    </main>
  );
}
