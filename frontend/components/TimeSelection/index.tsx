import React, {useState} from 'react';

// @ts-ignore
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from './TimeSelection.module.scss'

interface ITimeSelection {
  setTime: number
  timeChanged?: any
  minTime?: number
  disabled?: boolean
}

export const TimeSelection: React.VFC<ITimeSelection> = ({setTime,timeChanged,disabled}) => {

  return (
    <>
      <div className={styles.time}>
        <DatePicker
          selected={setTime}
          onChange={(date:Date) => timeChanged(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="HH:mm"
          disabled={disabled}
        />
      </div>
    </>
  );
};
