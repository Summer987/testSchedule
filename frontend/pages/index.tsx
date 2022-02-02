import type { NextPage } from 'next'

import styles from '../styles/Home.module.scss'
import {DayBlock} from "../components/DayBlock";
import {useAppSelector} from "../redux/hooks";
import {IPlan, selectPlan} from "../redux/slices/testScheduleSlice";
import {getMonday, getSunday} from "../utils/utils";
import {Button} from "../components/Button";
import {scheduleApi} from "../api/api";

const Home: NextPage = () => {
  const [savePlanUse] = scheduleApi.useSavePlanMutation();
  const planMonth = useAppSelector(selectPlan)
  const monday = getMonday(new Date())
  const sunday = getSunday(new Date())
  let masWeek:IPlan[] = []

  planMonth.forEach((day,index) => {
    if (monday <= day.date && day.date <= sunday) {
      masWeek.push(day)
    }
  })

  const savePlan = () => {
    if (masWeek) {
      savePlanUse(masWeek)
    }
  }

  return (
    <div className={styles.container}>
      {masWeek.map((day, index)=> (
        <DayBlock propsDay={day} key={index}/>
      ))}
      <div className={styles.save}>
        <Button onClick={savePlan} styleComp={'save'} value='Сохранить' />
      </div>
    </div>
  )
}

export default Home
