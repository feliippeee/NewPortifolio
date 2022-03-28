import { SiWhatsapp, SiGmail, SiGithub, SiLinkedin} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiDevices } from "react-icons/bi";

import { Footers, Links, CardFooter, Dev } from "./styles"
import Link from "next/link";
export function Footer() {
    return (
        <Footers>        
            <CardFooter>   
                <Links>                
                    <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                        <a target="_blank" rel="noopener noreferrer">
                            <SiWhatsapp style={{background: 'green', color:"white", padding: '5px', fontSize: '2.5rem', borderRadius: '5px'}} /> 
                        </a>
                    </Link>
                            
                    <Link href="https://www.linkedin.com/in/felipe-silva-99aba820a/">
                        <a target="_blank" rel="noopener noreferrer"> 
                            <SiLinkedin color="blue" style={{background: 'white', fontSize: '2.5rem', borderRadius: '5px' }} /> 
                        </a>
                    </Link>                       
            
                    <Link href='mailto:felipe.tecnosuporte@gmail.com'>
                        <a>
                            <SiGmail style={{background: 'white', color:'red',padding: '5px', fontSize: '2.5rem', borderRadius: '5px' }}/>
                        </a>                       
                    </Link>
                
                
                                            
                    <Link href="https://github.com/feliippeee">
                        <a target="_blank" rel="noopener noreferrer">
                            <SiGithub style={{color: 'black', background: '#888888', borderRadius: '50%', fontSize: '2.5rem'}}/>  
                        </a>
                    </Link>
               
                    <Link href="https://app.rocketseat.com.br/me/felipe-silva-1592460865">
                        <a target="_blank" rel="noopener noreferrer">
                        <img width='50px' height='50px' src="logo_rocketseat.png" alt="" /> 
                        </a>
                    </Link>
                </Links>
                <ul>
                            
                    <li><span>Desenvolvido por Felipe Marques</span> <BiDevices />  </li>
                </ul>
            </CardFooter>
        </Footers>
    )
}