import { useState, useEffect } from "react";

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
         <section key={product.id}>
            <p >{product.title}</p>
            <p> {product.description}</p>
            <p> {product.price}</p>
         </section>
         )}
        </>
    )
}
