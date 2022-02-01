import React, {useState} from 'react';

import styles from './DayBlock.module.scss';
import {Toggle} from "../Toggle";
import {DayBlockPlace} from "../DayBlockPlace";

export const DayBlock: React.FC = () => {
  const [selectDay, setSelectDay] = useState(false)

  return (
    <div className={styles.oneDay}>
      <div className={styles.oneDayHeader}>
        <p>Понедельник</p>
        <Toggle onChange={setSelectDay}/>
      </div>

      {selectDay && (

        <div className={styles.main}>
          <DayBlockPlace />
          <DayBlockPlace />
          <DayBlockPlace />
        </div>
      )}
    </div>
  );
};
