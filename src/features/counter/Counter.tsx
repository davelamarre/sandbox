import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
    decrement,
    increment,
    incrementAfterDelay,
    incrementAsync,
    incrementByAmount,
    incrementIfOdd,
    selectArray,
    selectStatus,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useAppSelector(selectArray);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAfterDelay(incrementValue, 2000))}
                >
                    Increment after delay
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async ({status})
                </button>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    );
}
