import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import usePersistedState from '../utils/usePersistedState';
import { GlobalStyle } from '../styles/globals';
import type { AppProps } from 'next/app';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import  {Header} from '../components/Header';
import { Footer } from '../components/Footer';
import { MenuMobile } from '../components/MenuMobile';



function MyApp({ Component, pageProps }: AppProps) {
  const [modalIsOpen, setIsOpen] = useState(false);  
  const [theme, setTheme] = useState( light);
  
  return (
  <ThemeProvider theme={theme}>
    
  <GlobalStyle />    
    <Component {...pageProps} />   
    
  </ThemeProvider>
  )
}
export default MyApp
