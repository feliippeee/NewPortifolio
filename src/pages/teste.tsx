import Image from 'next/image'
import { BsBoxArrowUpRight } from "react-icons/bs";
import dev from '../../../public/dev.png';
import { GetServerSideProps, GetStaticProps } from 'next';
import Api from './api/hello';
import axios from 'axios';
type Data = {    
        name: string;
        image: string;
        url: string;    
        languages: [];

    }   
    
type DataProps = {
    repos: Data[];

    
}

export default function Teste({repos}: DataProps) {
    console.log(repos)
   
    return (
      <ul>
        {repos.map(repo => (
            <div key={repo.name}>
            <li>{repo.name}</li>
            <li>{repo.url}</li>
            <li><Image src={repo.image} alt={repo.name} width="250" height="250" /></li>
            <li> <a href={repo.url}  target="_blank"  rel="noreferrer">ir </a> </li>
            <li>{repo.languages} </li>
            </div>
        ))}
        </ul> 

    )
}
//export const getServerSideProps: GetServerSideProps = async() => {
        //const response = await fetch('https://api.github.com/orgs/rocketseat/repos')
  //  const response = axios('http://localhost:3000/api/hello')
    //    const res = await axios.get('http://localhost:3000/api/hello')
      //  const data = await res.data

    //const api = Api()
//    const repos= await response.json();
   // return { 
       // props: {
            // repos: data,
     //   }
                
  //  }
//}
 Teste.getInitialProps = async () => {
    const res = await axios.get('https://portifolio1-feliippeee.vercel.app/api/hello')
    const data = await res.data
    console.log(data)
    return { repos: await res.data }
}

