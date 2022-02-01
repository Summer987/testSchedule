import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {Header} from "../components/Header";
import { Provider } from 'react-redux';
import { store } from './../redux/store'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Test Schedule</title>
          <meta name='description' content='Test Schedule' />
          <link rel='icon' href='/favicon.ico' />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"></link>
        </Head>

        <Header />
      </Provider>
    </>
  );

}

export default MyApp
