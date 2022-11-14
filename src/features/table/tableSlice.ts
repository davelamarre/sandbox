import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';

export interface TableState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: TableState = {
    value: 0,
    status: 'idle',
};


export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const {incrementByAmount} = tableSlice.actions;

export const selectArray = (state: RootState) => state.table.value;

export const incrementAfterDelay =
    (amount: number, delay: number): AppThunk =>
        (dispatch) => {
            setTimeout(() => {
                dispatch(incrementByAmount(amount));
            }, delay);
        };

export default tableSlice.reducer;




