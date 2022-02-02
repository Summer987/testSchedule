import React, {useState} from 'react';
import {TimeSelection} from "../TimeSelection";
import {IPlace, ITime, setSchedulePlanDayTime} from "../../redux/slices/testScheduleSlice";
import {useAppDispatch} from "../../redux/hooks";

interface IChangeTimeRange {
  timeDay: ITime
  dayId: number
  propsDay: IPlace
}

export const ChangeTimeRange: React.FC<IChangeTimeRange> = ({timeDay,dayId,propsDay}) => {
  const dispatch = useAppDispatch()
  const [timeTo, setTimeTo] = useState(timeDay.to)
  const [timeFrom, setTimeFrom] = useState(timeDay.from)

  const addedTime = () => {
    dispatch(setSchedulePlanDayTime({action: 'added',place:propsDay.name, id:dayId, from:timeFrom.valueOf(), to: timeTo.valueOf(),added: true}))
  }

  const removeTime = () => {
    dispatch(setSchedulePlanDayTime({action: 'remove',place:propsDay.name, id:dayId, from:timeFrom.valueOf(), to: timeTo.valueOf(),added: true}))
  }


  return (
    <>
      С
      <TimeSelection setTime={timeDay.from} timeChanged={setTimeFrom}/>
      ДО
      <TimeSelection setTime={timeDay.to} timeChanged={setTimeTo}/>
      { timeDay.added ? (
        <img height={25} src="/icons/trash.svg" alt="Logo" onClick={removeTime}/>
      ):(
        <img height={25} src="/icons/plus.svg" alt="Logo" onClick={addedTime}/>
        )}
    </>
  );
};
