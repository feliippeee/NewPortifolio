import { motion } from 'framer-motion';
import styled from 'styled-components';

interface ModalProps {
    modalActive: boolean;
}

export const Container = styled.div`
    position: absolute;
    background: ${props => props.theme.colors.primary};
    width: 100%;
    height: 100%;
    `;

export const Modal = styled(motion.div)<ModalProps>`
    z-index: 9;
    margin-top: 5.5rem;
    display: ${modalActive => modalActive? 'flex' : 'none' };
    width: 90%;
    height: 90%;
    ul {
        list-style: none;
        text-decoration: none;

    }
`;

export const HeaderLinks = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.525rem;
    `;

export const LinkExt = styled(motion.div)`
        background: ${props=> props.theme.colors.secundary};
        padding: 4px 0.825rem;
     a {
        display: flex;
        align-items: center;
        background: ${props=> props.theme.colors.primary};
        padding: 0 1rem;
        height: 56px;
        svg{ 
            font-size: 2.5rem; 
            margin-right: 1.5rem;
            
        }
        p {
            color: ${props => props.theme.colors.text};
            text-align: center;
            font-size: 1rem;
            font-weight: 600;
        }
    svg:hover {
        font-size: 1.5em;
    }
}
@media (max-width: 770px) {
        svg {
            font-size: 2rem; 
        }
        img {
            width: 35px; 
            height: 35px;
        }
    }
    @media (max-width: 480px) {
        svg {
            font-size: 1.8rem; 
        }
        img {
            width: 35px; 
            height: 35px;
        }
       
    
}
@media (max-width: 350px) {
        svg {
            font-size: 1.4rem; 
        }
        img {
            width: 25px; 
            height: 25px;
        }
    
} 
`;