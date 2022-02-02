import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.scss'
import {MonthCalendar} from "../components/MonthCalendar";

const Month: NextPage = () => {
  return (
    <>
      <MonthCalendar />
    </>
  )
}

export default Month
