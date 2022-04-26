import Link from 'next/link';
import { useState } from "react";
import { BsBoxArrowUpRight, BsFillPersonFill } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { GoDeviceMobile } from "react-icons/go";
import { SiGithub, SiWhatsapp, SiGmail, SiLinkedin, SiTypescript, SiReact, SiStyledComponents, SiNextDotJs, SiSass, SiExpo } from "react-icons/si";
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
import { motion } from 'framer-motion';
type Profile = {
    avatar_url: string;
    location: string;
}
type RepositoriesProps = {
    profile: Profile|any;
}




export function Main() {
    const [ selected, setSelected] = useState(1);
    const [ active, setActive] = useState(false);
    function handleSelected(tabs: number) {
        setSelected(tabs);
        setActive(true);     
    }

    const containerVariants = {
        hidden: { opacity: 1, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.8,
            staggerChildren: 0.8
          }
        }
      }
      const containerVariantsDescription = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }}
      }
        
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
      

    return (
        <Container>
            <Content>           
                {/*<ContentInfo>                    
                    Olá, visitante!                    
                </ContentInfo>   
    */}
                <Buttons>
                    <Button selected={selected == 1 ? selected : 0} onClick={() => handleSelected(1)} type="button">Sobre mim</Button> {/*criar um componente buttom para pegar o ...rest e colocar o active*/}
                    <Button selected={selected == 2 ? selected : 0} onClick={() => handleSelected(2)} type="button">O que estou aprendendo?</Button> 
                </Buttons> 
                        
       <ProfileUser >
           {selected == 1 && (
              
                <Description 
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <ProfileUserInfo
                        
                    >                        
                        <h2>Dados para contato</h2>
                        <Contact1>
                        <BsFillPersonFill /> <Link href=""><a>Felipe Marques</a></Link>
                        </Contact1>
                        <Contact1 whileHover={{ scale: 1.2 }}>
                            <SiWhatsapp style={{background: 'green', color:"white", padding: '5px'}} /> 
                                <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                                    <a target="_blank" rel="noopener noreferrer">(11) 98787-7320 <BsBoxArrowUpRight />
                                    </a>
                                </Link>
                        </Contact1>
                        
                        <Contact1 whileHover={{ scale: 1.2 }}>
                            <SiGmail style={{background: 'white', color:'red',padding: '5px'}}/> 
                            <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                                <a>
                                    felipe.tecnosuporte@gmai.com<BsBoxArrowUpRight />
                                </a>
                            </Link>
                        </Contact1>       
                        
                        <Contact1 whileHover={{ scale: 1.2 }}>
                            <SiLinkedin color="blue" style={{background: 'white'}} /> 
                            <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                                <a target="_blank" rel="noopener noreferrer">
                                    felipe-silva-99aba820a/  
                                <BsBoxArrowUpRight />
                                </a>
                            </Link>
                        </Contact1>

                        <Contact1 whileHover={{ scale: 1.2 }}>
                            <SiGithub style={{color: 'black', background: '#888888'}}/>  
                            <Link href="https://github.com/feliippeee">
                                <a target="_blank" rel="noopener noreferrer">
                                    github.com/feliippeee
                                    <BsBoxArrowUpRight />
                                </a>
                            </Link></Contact1>
                    </ProfileUserInfo>   
                    
                    <ProfileDescription variants={containerVariantsDescription}>              
                        <motion.div variants={itemVariants}>
                        <h2>Um pouco sobre mim!</h2>
                        </motion.div>
                        
                        <DescriptionProfile>

                        <motion.p variants={itemVariants}>
                            Olá, me chamo Felipe,
                            sou Desenvolvedor front-end,
                            apaixonado por tecnologia,
                            em busca de oportunidade 
                            para mostrar os meus conhecimentos,
                            buscando sempre aprimora-los e contribuir com a equipe.
                        </motion.p>
                    
                 
                    
                        </DescriptionProfile>


                    </ProfileDescription>
               
            </Description>
            
           )}
           {selected == 2 && (
               <About>

                        <h2>Tecnologias</h2>
                        <motion.div
                             initial="hidden"
                             animate="visible"
                             variants={containerVariants}
                        >
                        
                        <ul>   
                        <motion.div variants={itemVariants}>
                            <li>React JS<SiReact style={{color: 'blue', borderRadius: '50%'}}/></li>  

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>React Native<SiReact style={{color: '#8dbdeb', borderRadius: '50%'}}/></li> 

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Expo<SiExpo /></li>              

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Next<SiNextDotJs style={{background: 'black', color:'white',padding: '5px', borderRadius: '5px' }}/></li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Styled components<SiStyledComponents /></li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Typescript<SiTypescript color="blue" style={{background: 'white', borderRadius: '5px' }} /></li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Sass<SiSass /></li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Testes<GrTest /></li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Memo</li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>useMemo</li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>useCallback</li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Login social</li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Hooks</li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Consumir Api</li>

                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <li>Axios</li>

                        </motion.div>
                        </ul>  
                
                    </motion.div>
               </About> 
           )}
          
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
                    linkProject='https://github.com/feliippeee/ignews'
                    
                />
                <CardProjects 
                    image='/ignews.png'
                    title="Ignews - Portal de Notícias"
                    subTitle='O projeto tem como objetivo o estudo e desenvolvimento de uma aplicação em ReactJS com NextJS para listagem de posts e sistema de inscrição(subscription).
                    
                    A aplicação foi desenvolvida utilizando o framework NextJS aplicando conceitos como consumo de API externas, API Root, Server Side Rendering (SSR), Static Site Generation (SSG), STRIPE para pagamentos das subscriptions, NextAuth para autenticação com Github, FaunaDB para armazenar as informações do usuário em um banco de dados e Prismic CMS para adição e gerenciamento do conteúdo dos posts.
                    
                    O projeto foi desenvolvido como pratica das aulas do modulo 03 do Ignite da Rocketseat'
                    link='https://github.com/feliippeee/ignews'    
                    linkProject='https://github.com/feliippeee/ignews'
                />
                        
            </CardGrid>
        </CardGridProjects>
        </Content>
     </Container>

        
    )
}
