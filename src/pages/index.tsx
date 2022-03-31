import Head from 'next/head'
import { Main } from '../components/Main'
import React from 'react'
import CardProjects from '../components/CardProjects';
import { Footer } from '../components/Footer';
type Profile = {
  name: string;
  avatar_url: string;
  location: string;
}
type RepositoriesProps = {
  profile: Profile;
}

export  const Home = ({profile}: RepositoriesProps) => {
  return (
    <>
      <Head>
        <title>Felipe Marques Desenvolvedor</title>       
      </Head>      
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