import React from 'react';
import styles from './Toggle.module.scss';

interface IToggle {
  onChange: any
}

export const Toggle: React.FC<IToggle> = ({onChange}) => {

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={(e) => {onChange(e.target.checked)}}/>
      <span className={styles.slider}></span>
    </label>
  );
};
