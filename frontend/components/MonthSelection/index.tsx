import React, {useState} from 'react';

// @ts-ignore
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from './MonthSelection.module.scss'
import moment from "moment"
import {setScheduleData} from "../../redux/slices/testScheduleSlice"
import {useAppDispatch} from "../../redux/hooks";

export const MonthSelection: React.FC = () => {
  const dispatch = useAppDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: Date) => {
    setIsOpen(!isOpen)
    setStartDate(e)
    dispatch(setScheduleData(String(startDate)))
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.button}>
        <button onClick={handleClick}>
          {moment(startDate).format('MMMM YYYY')}
        </button>
        {isOpen && (
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            inline
            showMonthYearPicker
          />
        )}
      </div>
    </>
  );
};
