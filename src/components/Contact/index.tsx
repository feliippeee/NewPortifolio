import Link from "next/link";
import { BsBoxArrowUpRight, BsFillPersonFill } from "react-icons/bs";


type IconProps = {
    background: string;
    color: string;
}

type ContactProps = {
    data: IconProps;
    link: string;
    linkExternal?: string;
}

import { Container } from './styles';
export default function Contact({data, link, linkExternal}: ContactProps) {
    
    return (
        <Container>
            <BsFillPersonFill
                style={{background: '{data.background}', 
                color:'{data.color}',
                padding: '5px', 
                fontSize: '2.5rem', 
                borderRadius: '5px' 
                }}
            />
                <Link href={'mailto:felipe.tecnosuporte@gmail.com'}>
                    <a>felipe.tecnosuporte@gmail.com
                    <div>
                    <BsBoxArrowUpRight />
                    </div>
                    </a>
                </Link>
        </Container> 
    )
}