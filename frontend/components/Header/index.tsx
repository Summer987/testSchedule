import React from 'react';
import styles from './Header.module.scss';
import {MonthSelection} from "../MonthSelection";
import {ChoiceRange} from "../ChoiceRange";

export const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <MonthSelection />
      <ChoiceRange />
    </div>
  );
};
