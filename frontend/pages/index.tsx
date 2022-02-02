import type { NextPage } from 'next'

import styles from '../styles/Home.module.scss'
import {DayBlock} from "../components/DayBlock";
import {useAppSelector} from "../redux/hooks";
import {IPlan, selectPlan} from "../redux/slices/testScheduleSlice";
import {getMonday, getSunday} from "../utils/utils";

const Home: NextPage = () => {
  const planMonth = useAppSelector(selectPlan)
  const monday = getMonday(new Date())
  const sunday = getSunday(new Date())
  let masWeek:IPlan[] = []

  planMonth.forEach((day,index) => {
    if (monday <= day.date && day.date <= sunday) {
      masWeek.push(day)
    }
  })

  return (
    <div className={styles.container}>
      {masWeek.map((day, index)=> (
        <DayBlock propsDay={day} key={index}/>
      ))}
    </div>
  )
}

export default Home
