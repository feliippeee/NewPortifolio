import { GetServerSideProps, GetStaticProps } from "next";
import Image from 'next/image';
import axios from "axios";
import Head from "next/head";
import React from "react";
import { Projects } from "../components/Body/styles";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Portifólio from "../components/Body";
type Data = {  
    id: number;  
    name: string;
    image: string;
    url: string;    
    languages: [];

}   

type DataProps = {
repos: Data[];


}
export default function Portifolio({repos}:DataProps) {
    return (
        <>  
        <Head>
            <title>Portifólio</title>
        </Head>     
        <Portifólio repos={repos}/>    
        </>
    ) ;
}

export const getServerSideProps: GetServerSideProps = async() => {
    const res = await axios.get('https://portifolio1-feliippeee.vercel.app/api/hello')
    const data = await res.data

//const api = Api()
return { 
    props: {
         repos: data,
    },
            
}
}



