import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {incrementAfterDelay, selectArray,} from './tableSlice';
import styles from './Table.module.css';

export function Table() {
    const count = useAppSelector(selectArray);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>

            <div>
                <div>Result : {count}</div>
                <div>
                    <input
                        className={styles.textbox}
                        aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                    />
                    <button
                        className={styles.button}
                        onClick={() => dispatch(incrementAfterDelay(incrementValue, 2000))}
                    >
                        Increment after delay
                    </button>
                </div>
            </div>
        </div>
    );
}


