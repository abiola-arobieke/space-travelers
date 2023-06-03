import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllMissions = createAsyncThunk('fetch-all-missions', async (apiUrl) => {
  const response = await fetch(apiUrl);
  return response.json();
});

export const joinMission = createAsyncThunk('join-mission', async (missionId) => missionId);

export const leaveMission = createAsyncThunk('leave-mission', async (missionId) => missionId);

const missionSlice = createSlice({
  name: 'missions',
  initialState: { data: [], fetchStatus: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMissions.fulfilled, (state, action) => {
      state.data = action.payload?.map((mission) => ({
        ...mission,
        reserved: false,
      }));
      state.fetchStatus = 'success';
    });
    builder.addCase(fetchAllMissions.pending, (state) => {
      state.fetchStatus = 'loading';
    });
    builder.addCase(fetchAllMissions.rejected, (state) => {
      state.fetchStatus = 'error';
    });
    builder.addCase(joinMission.fulfilled, (state, action) => {
      const missionId = action.payload;
      state.data = state.data?.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true } : mission));
    });
    builder.addCase(leaveMission.fulfilled, (state, action) => {
      const missionId = action.payload;
      state.data = state.data?.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: false } : mission));
    });
  },
});

export default missionSlice.reducer;
