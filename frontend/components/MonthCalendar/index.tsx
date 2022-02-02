import React from 'react';

// @ts-ignore

import styles from './MonthCalendar.module.scss'
import {useAppSelector} from "../../redux/hooks";
import {selectPlan} from "../../redux/slices/testScheduleSlice";
import moment from "moment";

interface IMonthCalendar {
}

export const MonthCalendar: React.VFC<IMonthCalendar> = () => {
  const planMonth = useAppSelector(selectPlan)
  const firstDayMonth = planMonth[0]?.dayNumber
  let newMonth = [...planMonth]

  if (firstDayMonth !== 1) {
    for (let i=0; i< firstDayMonth-1; i++) {
      newMonth.unshift(
        {id: 0, day: '', cutDay: '', dayNumber: 0, date: 0,dateNumber: 0, active: false, place: []
        })
    }
  }

  console.log('newArr')
  console.log(newMonth)

  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableRow}>
          {newMonth.map((day) => (
            <div className={styles.tableCell}>
              <div className={styles.tableCellHeader}>
                <div>{day.cutDay}</div>
                <div>{day.dateNumber !== 0 ? day.dateNumber : ''}</div>
              </div>
              <div className={styles.tableCellContent}>
                {day.place.map((place) => (
                  place.active && (
                    <>
                      {place.name}
                      {place.time.map((time)=> (
                        <>
                          <p>с {moment(time.from).format('HH:mm')} до {moment(time.to).format('HH:mm')}</p>
                        </>
                      ))}
                    </>
                  )
                ))}
                <div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
