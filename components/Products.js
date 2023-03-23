import { useState, useEffect } from "react";
import styles from "../src/app/page.module.css";

export default function Products () {
    
const [dataProducts, setDataProducts] = useState([]);

    useEffect (() => {
        fetch('https://dummyjson.com/products')
        .then(res => (res.json()))
        .then(product => setDataProducts(product.products))
    },[])

    return (
        <>
         {dataProducts.map((product) => 
         <div key={product.id} className= {styles.products}>
            <p>{product.title}</p>
            <p> {product.description}</p>
            <p> ${product.price}</p>
         </div>
         )}
        </>
    )
}
