// components/ProductList.js
import { useState, useEffect } from 'react';
import styles from './Home.module.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div >
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Search..."
                onChange={e => setSearch(e.target.value)}
            />
            <div></div>
            <div className={styles.productList}>
                {filteredProducts.slice(0, 20).map(product => (
                    <div key={product.id} className={styles.product}>
                        <img src={product.image} alt={product.title} className={styles.image}/>
                        <h2 className={styles.itemTitle}>{product.title}</h2>
                        <p className={styles.price}>${product.price}</p>
                    </div>
                ))}
            </div></div>
    );
};

export default ProductList;