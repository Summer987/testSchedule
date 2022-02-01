import React, {useState} from 'react';

// @ts-ignore
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from './TimeSelection.module.scss'

interface ITimeSelection {
  setTime: number;
  minTime?: number;
}

export const TimeSelection: React.VFC<ITimeSelection> = ({setTime}) => {
  const [startDate, setStartDate] = useState(new Date().setTime(setTime));

  return (
    <>
      <div className={styles.time}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
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
