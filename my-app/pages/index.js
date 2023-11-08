import styles from './Home.module.css';
import Counter from './Counter';
import ProductList from './ProductList';

const HomePage = () => (
    <div className={styles.home}>
        <Counter incrementBy={1} />
        <Counter incrementBy={2} />
        <a href="https://github.com/JoshuaElmore/csci331NextJS" className={styles.link}>GitHub Repo</a>
        <ProductList />
    </div>
);

export default HomePage;