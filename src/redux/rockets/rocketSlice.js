import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
    rocketItem: [],
    isLoading: false
}

const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {},
});

export default rocketsSlice.reducers;