import React, {useState} from 'react';

// @ts-ignore
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import styles from './MonthSelection.module.scss'
import moment from "moment"
import {useAppDispatch} from "../../redux/hooks";
import {Button} from "../Button";

export const MonthSelection: React.FC = () => {
  const dispatch = useAppDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e: Date) => {
    setIsOpen(!isOpen)
    setStartDate(e)
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.button}>
        <Button onClick={handleClick} value={moment(startDate).format('MMMM YYYY')}/>

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
