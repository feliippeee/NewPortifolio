import {IoClose} from 'react-icons/io5'
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { SiWhatsapp, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Container, HeaderLinks, LinkExt } from "./styles";
import Modal from 'react-modal';
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";


interface MenuProps {
    modalIsOpen: boolean;
    setIsOpen: (setIsOpen: boolean) => void;
}


export function MenuMobile({modalIsOpen, setIsOpen}: MenuProps) {
    //const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
     }
     
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        >
            <button onClick={closeModal}><IoClose size={35} /></button>
        <HeaderLinks>
                <LinkExt>                                
                    <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                        <a target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp style={{background: 'green', padding: '5px', color: 'white', borderRadius: '5px'}} /> 
                        Conversar pelo Whatts
                        </a>
                    </Link>
                </LinkExt>

                <LinkExt>
                    <Link href="https://github.com/feliippeee">
                        <a target="_blank" rel="noopener noreferrer">
                            <SiGithub style={{color: 'black', background: '#888888', borderRadius: '50%'}}/>
                            Ver o GitHub  
                        </a>
                    </Link>                
                </LinkExt>
                
                <LinkExt>
                    <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                        <a target="_blank" rel="noopener noreferrer"> 
                            <SiLinkedin color="blue" style={{background: 'white', borderRadius: '5px' }} /> 
                            Ver o LinkedIn
                        </a>
                    </Link> 
                </LinkExt>
                
                <LinkExt>                                
                    <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                        <a>
                            <SiGmail style={{background: 'white', color:'red',padding: '5px', borderRadius: '5px' }}/>
                            Enviar um e-mail
                        </a>                       
                    </Link>
                </LinkExt>

                <LinkExt>
                    <Link href="">
                        <a>
                            <FaDiscord style={{background: 'white', color: 'blue', borderRadius: '5px'}}/>  
                            Conversar no discord
                        </a>
                    </Link>
                </LinkExt>
                
            
            </HeaderLinks>
      </Modal>
    </Container>



            

       
    )
}