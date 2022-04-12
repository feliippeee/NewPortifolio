import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaDiscord } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiMenu3Fill } from 'react-icons/ri';
import { SiWhatsapp, SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import { HeaderLinks, LinkExt } from './styles';
import ModalActive from '../ModalActive';
import { Container, Modal } from './styles';

interface TesteProps {
    setModalActive: (setModalActive: boolean) => void;
    modalActive: boolean;
}

export default function TesteModal({modalActive, setModalActive}: TesteProps) {
    return (
   <>
        {modalActive ? (
           <Container onClick={() => setModalActive(false)}>
            
            <Modal modalActive={modalActive}>
            <HeaderLinks>
                <LinkExt>                                
                    <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                        <a target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp style={{background: 'green', padding: '5px', color: 'white', borderRadius: '5px'}} /> 
                        <p>Conversar pelo Whatts</p>
                        </a>
                    </Link>
                </LinkExt>

                <LinkExt>
                    <Link href="https://github.com/feliippeee">
                        <a target="_blank" rel="noopener noreferrer">
                            <SiGithub style={{color: 'black', background: '#888888', borderRadius: '50%'}}/>
                            <p>Ver o GitHub</p>
                        </a>
                    </Link>                
                </LinkExt>
                
                <LinkExt>
                    <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                        <a target="_blank" rel="noopener noreferrer"> 
                            <SiLinkedin color="blue" style={{background: 'white', borderRadius: '5px' }} /> 
                            <p>Ver o LinkedIn</p>
                        </a>
                    </Link> 
                </LinkExt>
                
                <LinkExt>                                
                    <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                        <a>
                            <SiGmail style={{background: 'white', color:'red',padding: '5px', borderRadius: '5px' }}/>
                            <p>Enviar um e-mail</p>
                        </a>                       
                    </Link>
                </LinkExt>

                <LinkExt>
                    <Link href="https://discord.com/channels/@me/826535289391415296">
                        <a>
                            <FaDiscord style={{background: 'white', color: 'blue', borderRadius: '5px'}}/>  
                            <p>Conversar no discord</p>
                        </a>
                    </Link>
                </LinkExt>
                
            
            </HeaderLinks>
            </Modal>
        
           
           </Container>
           ) : '' }
</>
    )
}