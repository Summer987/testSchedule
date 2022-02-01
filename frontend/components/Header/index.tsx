import React, {useEffect} from 'react';
import styles from './Header.module.scss';
import {MonthSelection} from "../MonthSelection";
import {ChoiceRange} from "../ChoiceRange";
import {useAppDispatch} from "../../redux/hooks";
import {setSchedulePlan} from "../../redux/slices/testScheduleSlice";
import {addedCurrentMonth} from "../../utils/utils";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()

  useEffect(() => {
    dispatch(setSchedulePlan(addedCurrentMonth(currentDate, currentMonth)))
  },[])

  return (
    <div className={styles.header}>
      <MonthSelection />
      <ChoiceRange />
    </div>
  );
};
