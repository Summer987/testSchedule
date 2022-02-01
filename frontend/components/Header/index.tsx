import React from 'react';
import styles from './Header.module.scss';
import {MonthSelection} from "../MonthSelection";

export const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <MonthSelection />


    </div>
  );
};
