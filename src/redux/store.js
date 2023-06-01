import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice.reducer,
  },
});

export default store;
