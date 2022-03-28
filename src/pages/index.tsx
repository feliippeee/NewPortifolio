import Image from 'next/image';
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Main } from '../components/Main'
import React from 'react'
import { SiNextDotJs, SiNodeDotJs, SiReact, SiTypescript } from 'react-icons/si'
import CardProjects from '../components/CardProjects';
import Link from 'next/link';
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

        <div style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontSize: '22px', 
            color:'white',             
            margin: '2rem'
            }}>
                <h1 
                    style={{
                        display: 'flex', 
                        justifyContent: 'center',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        width: '90%',
                        background:'rgb(18,18,20)', 

                        }}>Projetos</h1>
            </div>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            }}>

        
        <div style={{ 
            display: 'grid',     
            gridTemplateColumns: '1fr', 
            height: '100%', 
            marginBottom: '2rem',
            margin: '0 6rem 0 6rem',
            alignItems: 'center',
            }}
        >

            <CardProjects 
                image='/letmeask_create_room.png'
                title="Ignews - Portal de Notícias"
                subTitle='O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).

                A aplicação foi desenvolvida utilizando o framework NextJS aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das subscriptions, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Prismic CMS para adição e gerenciamento do conteúdo dos posts.
                
                O projeto foi desenvolvido como pratica das aulas do modulo 03 do Ignite da Rocketseat'
                link='https://github.com/feliippeee/ignews'
            />
            <CardProjects 
                image='/ignews.png'
                title="Ignews - Portal de Notícias"
                subTitle='O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).

                A aplicação foi desenvolvida utilizando o framework NextJS aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das subscriptions, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Prismic CMS para adição e gerenciamento do conteúdo dos posts.
                
                O projeto foi desenvolvido como pratica das aulas do modulo 03 do Ignite da Rocketseat'
                link='https://github.com/feliippeee/ignews'
            />
                    
        </div>
        </div>
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