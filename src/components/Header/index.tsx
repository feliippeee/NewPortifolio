import React, { useContext } from "react";
import Switch from 'react-switch';
import Link from 'next/link';
import {Container, Content, HeaderLinks, LinkExt} from './styles';
import { SiNextDotJs, SiTypescript, SiReact, SiWhatsapp } from "react-icons/si";


import { ThemeContext } from "styled-components";

interface Props { 
    toggleTheme(): void;
   
}

export const Header: React.FC<Props> = ({toggleTheme}) => {
   const {colors, title} = useContext(ThemeContext);
  
    return (
        <Container>
            <header>
                    <div className="container">
                    
                    <div>
                        <img style={{borderRadius: '50%', width: '80px', height:'80px'}} src='https://github.com/feliippeee.png' /> 
                    </div>
                    <div>
                        <h1>Felipe Marques</h1>
                        <span>Desenvolvedor Front-end</span>                        
                    </div> 
                    </div>
                
                <Content>
                
                    <nav>
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
                    </nav>
                        
                        <HeaderLinks>
                            <LinkExt>                                
                                <Link href="">
                                    <a>
                                        <SiWhatsapp style={{background: 'green', color:"white", padding: '5px', fontSize: '2.5rem', borderRadius: '5px'}} /> 
                                    </a>
                                </Link>
                            </LinkExt>

                            <LinkExt>
                                <Link href="">
                                    <a> 
                                        <SiTypescript color="blue" style={{background: 'white', fontSize: '2.5rem', borderRadius: '5px' }} /> 
                                    </a>
                                </Link>                       

                            </LinkExt>
                          
                            <LinkExt>
                                <Link href="">
                                    <a>
                                        <SiNextDotJs style={{background: 'black', color:'white',padding: '5px', fontSize: '2.5rem', borderRadius: '5px' }}/>
                                    </a>                       
                                </Link>
                            </LinkExt>
                          
                            <LinkExt>                                
                                <Link href="">
                                    <a>
                                        <SiReact style={{color: 'blue', borderRadius: '50%', fontSize: '2.5rem'}}/>  
                                    </a>
                                </Link>
                            </LinkExt>
                            
                       
                        </HeaderLinks>
                </Content>
            </header>
        </Container>
        
    )
}
