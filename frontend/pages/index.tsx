import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Schedule</title>
        <meta name='description' content='Test Schedule' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <></>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
