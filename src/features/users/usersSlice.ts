import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../app/store';
import {fetchUserAPI, Iusers} from "./userAPI";

export interface UsersState {
    value: Iusers[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UsersState = {
    value: [],
    status: 'idle',
};


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUsers: (state, action: PayloadAction<Iusers[]>) => {
            state.value = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const {updateUsers} = usersSlice.actions;

export const usersArray = (state: RootState) => state.users.value;

export const updateUsersAfterDelay =
    (data: Iusers[], delay: number): AppThunk =>
        (dispatch) => {
            setTimeout(() => {
                dispatch(updateUsers(data));
            }, delay);
        };


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchUserAPI();
        return response.data;
    }
);


export default usersSlice.reducer;




