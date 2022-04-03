import React, { useContext, useState } from "react";
import Switch from 'react-switch';
import Image  from 'next/image';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';
import {Container, HeaderContainer, HeaderLogo, Name, Profission, ImageHeader, NameDev, Content, HeaderLinks, LinkExt, LinkMenuMobile} from './styles';
import { SiNextDotJs, SiTypescript, SiReact, SiDiscord, SiWhatsapp, SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { RiMenu3Fill } from 'react-icons/ri';

import { ThemeContext } from "styled-components";
import { MenuMobile } from "../MenuMobile";

interface Props { 
    toggleTheme(): void;
    openModal: (openModal: boolean) => void;
   
}



export const Header: React.FC<Props> = ({toggleTheme, openModal}) => {
   const {colors, title} = useContext(ThemeContext);
   const [modalIsOpen, setIsOpen] = useState(false);
 
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
                
                <Content>
                
                    {/*<nav>
                    <ul>
                        <li>
                            <Switch 
                                onChange={toggleTheme}
                                checked={title=== 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={10}
                                width={40}
                                handleDiameter={20}
                            />
                        </li>
                    </ul>
    </nav>*/}          
                      
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
                                    <img width='50px' height='50px' style={{background: '#29292e', padding: '2px', borderRadius: '5px'}} src="logo_rocketseat.png" alt="" /> 
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
                        <LinkMenuMobile>
                            <RiMenu3Fill size={35} style={{ cursor: 'pointer'}}onClick={() =>setIsOpen(true)} />
                        </LinkMenuMobile>
                </Content>
            </HeaderContainer>
            <MenuMobile 
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
            />
        </Container>
        
    )
}
