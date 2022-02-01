import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IPlan {
  day: string,
  dayNumber: number,
  date: string,
  active: boolean,
  timeBreak: [
    {
      from: number,
      to: number
    }
  ],
  place: [
    {
      name: string,
      time: [
        {
          from: number,
          to: number,
        }
      ]
    },
    {
      name: string,
      time: [
        {
          from: number,
          to: number,
        }
      ]
    }
  ]
}

interface ITestScheduleSlice {
  plan: IPlan[]
}


const initialState:ITestScheduleSlice = {
  plan: []
};

export const testScheduleSlice = createSlice({
  name: 'testScheduleSlice',
  initialState,
  reducers: {
    setSchedulePlan: (state, action) => {
      console.log('action')
      console.log(action)
      state.plan = action.payload
    },
  },
});

export const {
  setSchedulePlan
} = testScheduleSlice.actions;

// export const selectSchedule = (state: RootState) => state.scheduleState.data;
export const selectPlan = (state: RootState) => state.scheduleState.plan

export const testScheduleReducer = testScheduleSlice.reducer;
