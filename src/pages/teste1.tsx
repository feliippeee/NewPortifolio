import Image from "next/image";
import {  GetStaticProps } from 'next';

type Profile = {
    name: string;
    bio: string;
    avatar_url: string;
}
type RepositoriesProps = {
    profile: Profile[];
}

export default function Teste1({profile}: RepositoriesProps) {
    return (       
            <div>
                <p>{profile.map((profil) =>(
                    <p>{profil.name}</p>

                )
                )}</p>
            </div>
          
    ) ;
}



export const getStaticProps: GetStaticProps = async() => {
    const response = await fetch('https://api.github.com/users/feliippeee/repos')
    const data = await response.json();
    console.log(data);
    return { 
        props: {
            profile: data
        },
        revalidate: 30,
        
    }
}

/*        <div className='about1'>
        <div>
            <h2>O que estou aprendendo?</h2>
             <ul>   
                 <li>React Js</li>                 
                 <li>Next</li>
                 <li>Typescript</li>
                 <li>Styled components</li>
                 <li>Sass</li>
                 <li>Componentes</li>
                 <li>Consumir Api</li>
                 <li>Axios</li>
                 <li>Testes unitários</li>
             </ul>
              
        </div>
     
     </div> 


<p> 
                        Criei essa página, com intuito de aprimorar meus conhecimentos e assim também usá-lo como portifólio
                    </p>
                    
                    <h3>Bibliotecas que estou estudando:</h3> 
                    <ul>
                        <li>
                            <div className='images'>
                                <span><SiReact /></span>
                            </div> 
                        
                            <div>React Js</div> 
                        </li>
                            
                        <li>
                            <div className='images'><SiNextDotJs /></div>
                            <div>Next Js</div>
                        </li>
                        <li>
                            <div className='images'><SiTypescript /></div> 
                            <div>Typescript</div> 
                        </li>
                    </ul>

                    <h3>O que pretendo aprender posteriormente:</h3>
                    <ul>
                    <li>
                            <div className='images'><SiReact /></div> 
                            <div>React Native</div> 
                        </li>
                        <li>
                            <div className='images'><SiNodeDotJs /></div> 
                            <div>Node Js</div> 
                        </li>
                    </ul>


*/