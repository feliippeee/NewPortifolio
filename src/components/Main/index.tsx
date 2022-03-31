import Link from 'next/link';
import { useState } from "react";
import { BsBoxArrowUpRight, BsFillPersonFill } from "react-icons/bs";
import { SiGithub, SiWhatsapp, SiGmail, SiLinkedin } from "react-icons/si";
import CardProjects from "../CardProjects";
import { Footer } from '../Footer';

import {
    Container, 
    Content, 
    ProfileUserInfo, 
    ProfileDescription, 
    Description, 
    Buttons, 
    Button, 
    ProfileUser, 
    DescriptionProfile, 
    Contact1,
    About,
    CardTitle,
    Title,
    CardGrid,
    CardGridProjects,
} from './styles';
type Profile = {
    avatar_url: string;
    location: string;
}
type RepositoriesProps = {
    profile: Profile|any;
}

export function Main() {
    const [ selected, setSelected] = useState('1');
    const [ active, setActive] = useState(false);
    function handleSelected(tabs: string) {
        setSelected('');
        setSelected(tabs);
        setActive(true);

        
    }
    return (
        <Container>
            <Content>           
                {/*<ContentInfo>                    
                    Olá, visitante!                    
                </ContentInfo>   
    */}
                <Buttons>
                    <Button onClick={() => handleSelected('1')} type="button">Sobre mim</Button> {/*criar um componente buttom para pegar o ...rest e colocar o active*/}
                    <Button onClick={() => handleSelected('2')} type="button">O que estou aprendendo?</Button> 
                </Buttons> 
                        
       <ProfileUser >
           {selected == '1' && (
                <Description>
                    <ProfileUserInfo>                        
                        <h2>Dados para contato</h2>
                        <Contact1><BsFillPersonFill /> <Link href=""><a>Felipe Marques</a></Link></Contact1>
                        <Contact1>
                            <SiWhatsapp style={{background: 'green', color:"white", padding: '5px'}} /> 
                                <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                                    <a target="_blank" rel="noopener noreferrer">(11) 98787-7320 <BsBoxArrowUpRight />
                                    </a>
                                </Link>
                        </Contact1>
                        
                        <Contact1>
                            <SiGmail style={{background: 'white', color:'red',padding: '5px'}}/> 
                            <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                                <a>
                                    felipe.tecnosuporte@gmai.com<BsBoxArrowUpRight />
                                </a>
                            </Link>
                        </Contact1>       
                        
                        <Contact1>
                            <SiLinkedin color="blue" style={{background: 'white'}} /> 
                            <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                                <a target="_blank" rel="noopener noreferrer">
                                    felipe-silva-99aba820a/  
                                <BsBoxArrowUpRight />
                                </a>
                            </Link>
                        </Contact1>

                        <Contact1>
                            <SiGithub style={{color: 'black', background: '#888888'}}/>  
                            <Link href="https://github.com/feliippeee">
                                <a target="_blank" rel="noopener noreferrer">
                                    github.com/feliippeee
                                    <BsBoxArrowUpRight />
                                </a>
                            </Link></Contact1>
                    </ProfileUserInfo>   
                    
                    <ProfileDescription>
                        <Title>Um pouco sobre mim!</Title>
                        <DescriptionProfile>

                        <p>Olá, me chamo Felipe, sou Desenvolvedor front-end apaixonado por tecnologia, em busca de oportunidade
                            para mostrar os meus conhecimentos, buscando sempre aprimora-los e contribuir com a equipe.
                        </p>    
                        </DescriptionProfile>

                    </ProfileDescription>
               
            </Description>

           )}
           {selected == '2' && (
               <About>
                        <h2>Tecnologias</h2>
                        <ul>   
                            <li>React JS</li>  
                            <li>React Native</li> 
                            <li>Expo</li>              
                            <li>Next</li>
                            <li>Typescript</li>
                            <li>Styled components</li>
                            <li>Sass</li>
                            <li>Memo</li>
                            <li>useMemo</li>
                            <li>useCallback</li>
                            <li>Login social</li>
                            <li>Hooks</li>
                            <li>Consumir Api</li>
                            <li>Axios</li>
                            <li>Testes unitários</li>
                        </ul>  
                
               </About> 
           )}
           {
               selected == '3' && (
                   <>
                    <CardProjects 
                        image='/ignews.png'
                        title="Ignews - Portal de Notícias"
                        subTitle='O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).

                        A aplicação foi desenvolvida utilizando o framework NextJS aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das subscriptions, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Prismic CMS para adição e gerenciamento do conteúdo dos posts.
                        
                        O projeto foi desenvolvido como pratica das aulas do modulo 03 do Ignite da Rocketseat'
                        link='https://github.com/feliippeee/ignews'
                         

                    />
                   
                   </>
               )
               
           }
            
        </ProfileUser> 
        

            <CardTitle>
                <Title>Projetos</Title>
            </CardTitle>
        <CardGridProjects>
            <CardGrid>
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
                        
            </CardGrid>
        </CardGridProjects>
        </Content>
     </Container>

        
    )
}
