import React from 'react';

import styles from './DayBlockPlace.module.scss';
import {IPlace, setSchedulePlanDayPlace} from "../../redux/slices/testScheduleSlice";
import {useAppDispatch} from "../../redux/hooks";
import { ChangeTimeRange} from "../ChangeTimeRange";

interface IDayBlockPlace {
  propsDay: IPlace,
  dayId: number
}

export const DayBlockPlace: React.FC<IDayBlockPlace> = ({dayId, propsDay}) => {
  const dispatch = useAppDispatch()

  const setCheckedPlaces = (activePlace: boolean) => {
    dispatch(setSchedulePlanDayPlace({id: dayId, place: propsDay.name, active: activePlace}))
  }

  return (
    <div className={styles.place}>
      <div className={styles.choicePlace}>
        <input type="checkbox" checked={propsDay.active} onChange={(e) => {setCheckedPlaces(e?.target.checked)}}/>
        {propsDay.name}
      </div>
      {
        propsDay.active && (
          <div className={styles.timeBlock}>
            {propsDay.time.map((timeDay, index) => (
              <div className={styles.timeBlockRange} key={index+timeDay.to}>
                <ChangeTimeRange dayId={dayId} propsDay={propsDay} timeDay={timeDay}/>
              </div>
              )
            )}
          </div>
        )
      }
    </div>
  );
};
