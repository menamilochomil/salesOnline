import styles from "../src/app/page.module.css";

export default function Header () {
    return (
        <>
        <section className={styles.header}>
        <div className={styles.circule}></div>
        <h1 className={styles.salesOnline}>SalesOnline</h1>
        </section>
      
        </>
        
     );
}