import type { NextPage } from 'next'

import styles from '../styles/Home.module.scss'
import {DayBlock} from "../components/DayBlock";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DayBlock />
      <DayBlock />
      <DayBlock />
      <DayBlock />
      <DayBlock />
      <DayBlock />
      <DayBlock />
    </div>
  )
}

export default Home
