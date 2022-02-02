import React from 'react';
import styles from './Toggle.module.scss';

interface IToggle {
  onChange: any
  active: boolean
}

export const Toggle: React.FC<IToggle> = ({onChange,active}) => {

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={active} onChange={(e) => {onChange(e.target.checked)}}/>
      <span className={styles.slider}></span>
    </label>
  );
};
