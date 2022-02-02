import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {addedNewPlace} from "../../utils/utils";

export interface ITime {
  added: boolean,
  from: number,
  to: number,
}

export interface IPlace {
  name: string,
  active: boolean,
  time: ITime[]
}

export interface IPlan {
  id: number,
  day: string,
  cutDay: string,
  dayNumber: number,
  date: number,
  dateNumber: number,
  active: boolean,
  place: IPlace[]
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
      state.plan = action.payload
    },

    setSchedulePlanDay : (state, action) => {
      const currentDay = state.plan.findIndex((day) => day.id === action.payload.id)
      state.plan[currentDay].active = action.payload.active
      state.plan[currentDay].place = addedNewPlace(new Date(state.plan[currentDay].date))
    },

    setSchedulePlanDayPlace : (state, action) => {
      const currentDay = state.plan.findIndex((day) => day.id === action.payload.id)
      const currentPlace = state.plan[currentDay].place.findIndex((place) => place.name === action.payload.place)

      state.plan[currentDay].place[currentPlace].active = action.payload.active
    },

    setSchedulePlanDayTime : (state, action) => {
      const currentDay = state.plan.findIndex((day) => day.id === action.payload.id)
      const currentPlace = state.plan[currentDay].place.findIndex((place) => place.name === action.payload.place)
      const place = state.plan[currentDay].place[currentPlace]
      const index = place.time.findIndex((time) => time.from == action.payload.from && time.to == action.payload.to && time.added == true)

      if (action.payload.action === 'added') {
        if (index == -1) {
          place.time[place.time.length-1].added = true
          place.time.push({from: action.payload.to, to: action.payload.to + 7200000, added:false})
        }
      } else if(action.payload.action === 'remove' && index !== -1) {
        place.time.splice(index, 1)
      }
    },
  },
});

export const {
  setSchedulePlan,
  setSchedulePlanDay,
  setSchedulePlanDayPlace,
  setSchedulePlanDayTime
} = testScheduleSlice.actions;

// export const selectSchedule = (state: RootState) => state.scheduleState.data;
export const selectPlan = (state: RootState) => state.scheduleState.plan

export const testScheduleReducer = testScheduleSlice.reducer;
