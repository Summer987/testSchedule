import React, {MouseEventHandler} from 'react';

import styles from './Button.module.scss';

interface IButton {
  value: string,
  onClick: MouseEventHandler<HTMLButtonElement>
  styleComp?: string
}

export const Button: React.FC <IButton> = ({value,onClick,styleComp}) => {

  return (
    <>
      <button className={`${styles.button} ${styleComp ? styles[styleComp] : ''}`} onClick={onClick}>
        {value}
      </button>
    </>
  );
};
