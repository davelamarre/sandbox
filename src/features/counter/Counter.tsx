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

export function Counter() {
    const count = useAppSelector(selectArray);
    const status = useAppSelector(selectStatus);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <div>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    onClick={() => dispatch(incrementAfterDelay(incrementValue, 2000))}
                >
                    Increment after delay
                </button>
                <button
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async ({status})
                </button>
                <button
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </button>
            </div>
        </div>
    );
}
