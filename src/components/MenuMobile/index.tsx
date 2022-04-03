import { Container } from "./styles";
import {IoClose} from 'react-icons/io5'
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { SiWhatsapp, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { HeaderLinks, LinkExt } from "../Header/styles";
import Modal from 'react-modal';
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";


interface MenuProps {
    modalIsOpen: boolean;
    setIsOpen: (setIsOpen: boolean) => void;
}
const customStyles = {
    content: {
      width: '50%',
      height: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export function MenuMobile({modalIsOpen, setIsOpen}: MenuProps) {
    //const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
     }
     
  
    function closeModal() {
      setIsOpen(false);
    }
    return (

            <div>
            <button onClick={openModal}><RiMenu3Fill size={35} /></button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><IoClose size={35} /></button>
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
      </Modal>
    </div>



            

       
    )
}