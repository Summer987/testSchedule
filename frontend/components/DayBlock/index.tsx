import React, {useState} from 'react';

import styles from './DayBlock.module.scss';
import {Toggle} from "../Toggle";
import {DayBlockPlace} from "../DayBlockPlace";
import {IPlan, setSchedulePlanDay} from "../../redux/slices/testScheduleSlice";
import {useAppDispatch} from "../../redux/hooks";

interface IDayBlock {
  propsDay: IPlan
}

export const DayBlock: React.FC<IDayBlock> = ({propsDay}) => {
  const dispatch = useAppDispatch()

  const setSelectDays = (activeDay:boolean) => {
    dispatch(setSchedulePlanDay({id: propsDay.id, active:activeDay}))
  }

  return (
    <div className={styles.oneDay}>
      <div className={styles.oneDayHeader}>
        <p>{propsDay.day}</p>
        <Toggle active={propsDay.active} onChange={setSelectDays}/>
      </div>

      {propsDay.active && (
        <div className={styles.main}>
          {propsDay.place.map((place,index) => (
            <DayBlockPlace dayId={propsDay.id} propsDay={place} key={index}/>
          ))
          }
        </div>
      )}
    </div>
  );
};
