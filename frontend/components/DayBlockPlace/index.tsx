import React, {useState} from 'react';

import styles from './DayBlockPlace.module.scss';
import {TimeSelection} from "../TimeSelection";
import Image from 'next/image'
import Images from '/frontend/public/icons/plus.svg'




export const DayBlockPlace: React.FC = () => {
  const [checkedPlace, setCheckedPlace] = useState(false)

  let k = [
    {
      day: 'Понедельник',
      worked: {

      }
    }
  ]

  const q = () => {
    console.log('ewr')
  }

  return (
    <div className={styles.place}>
      <div className={styles.choicePlace}>
        <input type="checkbox" onChange={(e) => {setCheckedPlace(e.target.checked)}}/>
        В Москве
      </div>
      {
        checkedPlace && (
          <div className={styles.timeBlock}>
            С
            <TimeSelection setTime={21600000}/>
            ДО
            <TimeSelection setTime={54000000}/>
            <img height={25} src="/icons/plus.svg" alt="Logo" onClick={q}/>
            <img height={25} src="/icons/trash.svg" alt="Logo" onClick={q}/>

          </div>
        )
      }
    </div>
  );
};
