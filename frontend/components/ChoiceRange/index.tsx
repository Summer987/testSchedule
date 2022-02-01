import React from 'react';
import Link from 'next/link';

import styles from './ChoiceRange.module.scss';
import {Button} from "../Button";
import { useRouter } from 'next/router';

export const ChoiceRange: React.FC = () => {
  const router = useRouter();

  const choiceWeek = () => {

  }

  const choiceMonth = () => {

  }

  const menu = [
    { text: 'Неделя', path: '/week' },
    { text: 'Месяц', path: '/month' },
  ];

  return (
    <div className={styles.menu}>
      <Link href='/'>
        <a>
          <Button
            styleComp={router.asPath === '/' ? 'contained' : ''}
            value={'Неделя'}
            onClick={choiceWeek}>
          </Button>
        </a>
      </Link>

      <Link href='/month'>
        <a>
          <Button
            styleComp={router.asPath === '/month' ? 'contained' : ''}
            value={'Месяц'}
            onClick={choiceWeek}>
          </Button>
        </a>
      </Link>
    </div>
  );
};
