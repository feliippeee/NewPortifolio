import { SiWhatsapp, SiTypescript, SiReact, SiNextDotJs, SiDiscord} from "react-icons/si";
import { BiDevices } from "react-icons/bi";

import { Footers, Links, DevCreate, Dev, CardFooter } from "./styles"
import Link from "next/link";
export function Footer() {
    return (
        <Footers>        
            <CardFooter>   
                <Links>   

                    <Link href="">
                        <a>
                            <SiNextDotJs style={{background: 'black', color:'white',padding: '5px', borderRadius: '5px' }}/>
                        </a>                       
                    </Link>

                    <Link href="">
                        <a>
                            <SiReact style={{color: 'blue', borderRadius: '50%'}}/>  
                        </a>
                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=5511987877320&text=Texto%20aqui">
                        <a target="_blank" rel="noopener noreferrer">
                            <SiWhatsapp style={{background: 'green', color:"white", padding: '5px', borderRadius: '5px'}} /> 
                        </a>
                    </Link>
                            
                    <Link href="">
                        <a> 
                            <SiTypescript color="blue" style={{background: 'white', borderRadius: '5px' }} /> 
                        </a>
                    </Link>                        
               
                   
                </Links>
            </CardFooter>
                <DevCreate>                            
                    <Dev>Desenvolvido por Felipe Marques <BiDevices /> </Dev>
                    
                </DevCreate>
        </Footers>
    )
}