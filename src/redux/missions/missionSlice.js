import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllMissions = createAsyncThunk('fetch-all-products', async (apiUrl) => {
  const response = await fetch(apiUrl);
  return response.json();
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: { data: [], fetchStatus: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMissions.fulfilled, (state, action) => {
      state.data = action.payload;
      state.fetchStatus = 'success';
    });
    builder.addCase(fetchAllMissions.pending, (state) => {
      state.fetchStatus = 'loading';
    });
    builder.addCase(fetchAllMissions.rejected, (state) => {
      state.fetchStatus = 'error';
    });
  },
});

export default missionSlice;
