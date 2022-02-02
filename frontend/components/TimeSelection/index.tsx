import React, {useState} from 'react';

// @ts-ignore
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from './TimeSelection.module.scss'

interface ITimeSelection {
  setTime: number
  timeChanged?: any
  minTime?: number
}

export const TimeSelection: React.VFC<ITimeSelection> = ({setTime,timeChanged}) => {
  const [startDate, setStartDate] = useState(new Date(setTime));

  const changeTime = (date:Date) => {
    setStartDate(date)
    timeChanged(date)
  }

  return (
    <>
      <div className={styles.time}>
        <DatePicker
          selected={startDate}
          onChange={(date:Date) => changeTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="HH:mm"
        />
      </div>
    </>
  );
};
