import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rocketsItem: [],
  isLoading: false,
};

export const getRocketsItem = createAsyncThunk(
  'rockets/getAllRockets',
  async (name, thunkAPI) => {
    try {
      const res = await axios.get(apiUrl);
      const rocketsData = res.data;
      return rocketsData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to get data');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      const rocketId = action.payload;
      state.rocketsItem = state.rocketsItem?.map((rocket) => (
        rocket.id === rocketId ? { ...rocket, reserved: true } : { ...rocket }));
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      state.rocketsItem = state.rocketsItem.map((rocket) => (
        rocket.id === rocketId ? { ...rocket, reserved: false } : { ...rocket }));
    },
  },
  extraReducers: {
    [getRocketsItem.pending]: (state) => {
      state.isLoading = true;
    },
    [getRocketsItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rocketsItem = action.payload;
    },
    [getRocketsItem.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addReservation, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
