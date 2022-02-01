import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


const initialState = {
  data: '',
  plan: [
    {
      day: 'Понедельник',
      date: '2022-01-31',
      active: false,
      timeBreak: [
        {
          from: '14:00',
          to: '15:00'
        }
      ],
      place: [
        {
          name: 'Москва',
          time: [
            {
              from: '09:00',
              to: '15:00',
            }
          ]
        }
      ]

    },
  ]
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
