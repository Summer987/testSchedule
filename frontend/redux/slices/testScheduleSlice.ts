import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


const initialState = {
  data: '',
};

export const testScheduleSlice = createSlice({
  name: 'testScheduleSlice',
  initialState,
  reducers: {
    setScheduleData: (state, action) => {
      state.data = action.payload
    },
  },
});

export const {
  setScheduleData
} = testScheduleSlice.actions;

export const selectSchedule = (state: RootState) => state.scheduleState.data;

export const testScheduleReducer = testScheduleSlice.reducer;
