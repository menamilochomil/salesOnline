import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hello from "../../components/Hello";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello />
    </main>
  );
}
