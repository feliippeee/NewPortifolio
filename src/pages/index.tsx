import Head from 'next/head'
import React from 'react'
type Profile = {
  name: string;
  avatar_url: string;
  location: string;
}
type RepositoriesProps = {
  profile: Profile;
}

export  const Home = () => {
  return (
   
      <Head>
        <title>Felipe Marques Desenvolvedor</title>       
      </Head>   
     
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