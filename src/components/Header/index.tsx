import React, { useContext } from "react";
import Switch from 'react-switch';
import Image  from 'next/image';
import Link from 'next/link';
import { FaBars, FaDiscord } from 'react-icons/fa';
import {
    Container, 
    HeaderContainer, 
    HeaderLogo, 
    Name, 
    Profission, 
    ThemeSelect,
    ImageHeader, 
    NameDev, 
    Content, 
    HeaderLinks, 
    LinkExt, 
    LinkMenuMobile
} from './styles';
import { SiWhatsapp, SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import { ThemeContext } from "styled-components";
import { IoClose } from "react-icons/io5";

interface Props { 
    toggleTheme(): void;
    setModalActive: (setModalActive: boolean) => void;
    modalActive: boolean;
}



export const Header: React.FC<Props> = ({ toggleTheme, setModalActive, modalActive}) => {
   const {colors, title} = useContext(ThemeContext);   

   const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.8
      }
    }
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
            <HeaderContainer>
  
                    <HeaderLogo>
                    
                    <ImageHeader variants={itemVariants} whileHover={{ rotate: 360, scale: 1.2, transition:{ duration: 1} }}>
                        <Image width='80px' height='80px' src='https://github.com/feliippeee.png' /> 
                    </ImageHeader>
                    <NameDev 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        whileHover={{ rotateX: 60, scale: 1, transition:{ duration: 1}}}
                    >
                        <Name variants={itemVariants}>Felipe Marques</Name>
                        <Profission variants={itemVariants}>Desenvolvedor Front-end</Profission>                        
                    </NameDev> 
                    </HeaderLogo>
                    <ThemeSelect whileHover={{ scale: 1.5 }}>

                            <Switch 
                                onChange={toggleTheme}
                                checked={title=== 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                onColor={'#29292e'}
                                />
                    </ThemeSelect>
                <Content>
                
                  
                       
                      
                        <HeaderLinks>
                            <LinkExt 
                                whileHover={{ scale: 1.5 }}
                            >                                
                                <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                                    <a target="_blank" rel="noopener noreferrer">
                                    <SiWhatsapp style={{background: 'green', padding: '5px', color: 'white', borderRadius: '5px'}} /> 
                                    </a>
                                </Link>
                            </LinkExt>

                            <LinkExt 
                                whileHover={{ scale: 1.5 }}
                            > 
                                <Link href="https://github.com/feliippeee">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <SiGithub style={{color: 'black', background: '#888888', borderRadius: '50%'}}/>  
                                    </a>
                                </Link>                
                            </LinkExt>
                          
                            <LinkExt 
                                whileHover={{ scale: 1.5 }}
                            > 
                                <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                                    <a target="_blank" rel="noopener noreferrer"> 
                                        <SiLinkedin color="blue" style={{background: 'white', borderRadius: '5px' }} /> 
                                    </a>
                                </Link> 
                            </LinkExt>
                          
                            <LinkExt 
                                whileHover={{ scale: 1.5 }}
                            >                                 
                                <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                                    <a>
                                        <SiGmail style={{background: 'white', color:'red',padding: '5px', borderRadius: '5px' }}/>
                                    </a>                       
                                </Link>
                            </LinkExt>

                            <LinkExt 
                                whileHover={{ scale: 1.5 }}
                            > 
                                <Link href="https://app.rocketseat.com.br/me/felipe-silva-1592460865">
                                    <a target="_blank" rel="noopener noreferrer">
                                    <img width='40px' height='40px' style={{background: '#29292e', padding: '2px', borderRadius: '5px'}} src="logo_rocketseat.png" alt="" /> 
                                    </a>
                                </Link>
                            </LinkExt>

                            <LinkExt 
                                whileHover={{ scale: 1.5 }}
                            > 
                                <Link href="">
                                    <a>
                                        <FaDiscord style={{background: 'white', color: 'blue', borderRadius: '5px'}}/>  
                                    </a>
                                </Link>
                            </LinkExt>
                            
                       
                        </HeaderLinks>
                        <LinkMenuMobile modalActive={modalActive}>
                          {modalActive ? <IoClose size={35} style={{ cursor: 'pointer', borderRadius: '50%'}}onClick={() =>setModalActive(!modalActive)} /> : <FaBars size={35} style={{ cursor: 'pointer'}}onClick={() =>setModalActive(!modalActive)} />}
                        </LinkMenuMobile>
                </Content>
            </HeaderContainer>
        </Container>
        
    )
}
