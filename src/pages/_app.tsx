import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from '../styles/globals';
import type { AppProps } from 'next/app';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import  {Header} from '../components/Header';
import { Footer } from '../components/Footer';
import ModalActive from '../components/ModalActive';
import { Main } from '../components/Main';


function MyApp({ Component, pageProps }: AppProps) {
  const [modalActive, setModalActive] = useState(false);  
  const [theme, setTheme] = useState( dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
  <ThemeProvider theme={theme}>
    
  <GlobalStyle /> 
  <Header toggleTheme={toggleTheme} setModalActive={setModalActive} modalActive={modalActive} />    
    <Component {...pageProps} />   
    <ModalActive setModalActive={setModalActive} modalActive={modalActive} />   
      
      {!modalActive &&
        <>
        <Main />
        <Footer /> 
        </>
        }
    
  </ThemeProvider>
  )
}

export default MyApp
