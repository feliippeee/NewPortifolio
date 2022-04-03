import Head from 'next/head'
import { Main } from '../components/Main'
import React, { useState } from 'react'
import CardProjects from '../components/CardProjects';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MenuMobile } from '../components/MenuMobile';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
type Profile = {
  name: string;
  avatar_url: string;
  location: string;
}
type RepositoriesProps = {
  profile: Profile;
}

export  const Home = ({profile}: RepositoriesProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);  
  const [theme, setTheme] = useState( light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  
  return (
    <>
      
   
      <Head>
        <title>Felipe Marques Desenvolvedor</title>       
      </Head>      
      <Header toggleTheme={toggleTheme}  openModal={setIsOpen}/> 
      <Main />
      <Footer />
        
        {/*<h2><Link href=""><a>Carregar todos os Projetos</a></Link></h2>*/}
     </>
  )
}

export default Home

/*export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://api.github.com/users/feliippeee')
    const data = await response.json();
    console.log(data);
    return { 
        props: {
            profile: data
        },
        revalidate: 60*7*24,
        
    }
  }

*/