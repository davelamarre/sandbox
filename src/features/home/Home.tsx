import React, {useState} from 'react';

import {useAppDispatch, useAppSelector} from '../../app/hooks';

import {fetchUsers, updateUsers, usersArray} from '../users/usersSlice';
import {removeDuplicateFromArrayProperty, sortByDate} from "../utils/sort-array";
import {incrementAfterDelay, selectArray} from "../table/tableSlice";

export function Home() {
    const count = useAppSelector(selectArray);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;
    const users = useAppSelector(usersArray);

    const [currentDirection, setCurrentDirection] = useState('asc');
    return (
        <div>
            <div>
                <div>
                    <div className='box'>
                        <input
                            aria-label="Set increment amount"
                            value={incrementAmount}
                            onChange={(e) => setIncrementAmount(e.target.value)}
                        />
                        <button
                            onClick={() => dispatch(incrementAfterDelay(incrementValue, 2000))}
                        >
                            Increment value after delay
                        </button>
                        <div>Result : {count}</div>
                    </div>
                    <button
                        onClick={() => dispatch(fetchUsers())}
                    >
                        Retrieve users from web service
                    </button>
                    <button
                        onClick={() => dispatch(updateUsers(removeDuplicateFromArrayProperty(users, 'id')))}
                    >
                        Remove duplicate from data-source
                    </button>
                    <button
                        onClick={() => {
                            setCurrentDirection(currentDirection === 'asc' ? 'dsc' : 'asc')
                            dispatch(updateUsers(sortByDate(users, 'createdAt', currentDirection)));
                        }}
                    >
                        Sort By Date {currentDirection === 'asc' ? 'descending' : 'ascending'}
                    </button>
                    <div>
                        {users.map(user => {
                            return <div className={'users'} key={user.id}>
                                <div>#{user.id}</div>
                                <img src={user.avatar} alt={user.name}/>
                                <div>{user.name}</div>
                                <div>{user.createdAt}</div>
                            </div>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


