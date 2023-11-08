import { useState } from 'react';
import styles from './Home.module.css';

const Counter = ({ incrementBy }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        let newCount = count + incrementBy;
        if (newCount > 10) newCount = 0;
        setCount(newCount);
    };

    return (
        <div className={styles.counter}>
            <button onClick={increment} className={styles.counterButton}>Increment by {incrementBy}</button>
            <p>Count: {count}</p>
        </div>
    );
};

export default Counter;