import React, { useContext, useState } from "react";
import Switch from 'react-switch';
import Image  from 'next/image';
import Link from 'next/link';
import { FaBars, FaDiscord } from 'react-icons/fa';
import {Container, HeaderContainer, HeaderLogo, Name, Profission, ImageHeader, NameDev, Content, HeaderLinks, LinkExt, LinkMenuMobile} from './styles';
import { SiWhatsapp, SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

import { ThemeContext } from "styled-components";
import { IoClose } from "react-icons/io5";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

interface Props { 
    toggleTheme(): void;
    setModalActive: (setModalActive: boolean) => void;
    modalActive: boolean;
}



export const Header: React.FC<Props> = ({ toggleTheme, setModalActive, modalActive}) => {
   const {colors, title} = useContext(ThemeContext);   
    return (
        <Container>
            <HeaderContainer>
  
                    <HeaderLogo>
                    
                    <ImageHeader>
                        <Image width='80px' height='80px' src='https://github.com/feliippeee.png' /> 
                    </ImageHeader>
                    <NameDev>
                        <Name>Felipe Marques</Name>
                        <Profission>Desenvolvedor Front-end</Profission>                        
                    </NameDev> 
                    </HeaderLogo>
                
                            <Switch 
                                onChange={toggleTheme}
                                checked={title=== 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                                
                            />
                <Content>
                
                  
                       
                      
                        <HeaderLinks>
                            <LinkExt>                                
                                <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                                    <a target="_blank" rel="noopener noreferrer">
                                    <SiWhatsapp style={{background: 'green', padding: '5px', color: 'white', borderRadius: '5px'}} /> 
                                    </a>
                                </Link>
                            </LinkExt>

                            <LinkExt>
                                <Link href="https://github.com/feliippeee">
                                    <a target="_blank" rel="noopener noreferrer">
                                        <SiGithub style={{color: 'black', background: '#888888', borderRadius: '50%'}}/>  
                                    </a>
                                </Link>                
                            </LinkExt>
                          
                            <LinkExt>
                                <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                                    <a target="_blank" rel="noopener noreferrer"> 
                                        <SiLinkedin color="blue" style={{background: 'white', borderRadius: '5px' }} /> 
                                    </a>
                                </Link> 
                            </LinkExt>
                          
                            <LinkExt>                                
                                <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                                    <a>
                                        <SiGmail style={{background: 'white', color:'red',padding: '5px', borderRadius: '5px' }}/>
                                    </a>                       
                                </Link>
                            </LinkExt>

                            <LinkExt>
                                <Link href="https://app.rocketseat.com.br/me/felipe-silva-1592460865">
                                    <a target="_blank" rel="noopener noreferrer">
                                    <img width='40px' height='40px' style={{background: '#29292e', padding: '2px', borderRadius: '5px'}} src="logo_rocketseat.png" alt="" /> 
                                    </a>
                                </Link>
                            </LinkExt>

                            <LinkExt>
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
           {
               /*
           <ModalActive setModalActive={() => setModalActive(modalActive)} />
               <MenuMobile 
                        modalIsOpen={isOpen}
                        setIsOpen={setIsOpen}
                />
               
               */
           } 
        </Container>
        
    )
}
