import styled, { css } from "styled-components";
import { shade } from "polished"; //utilizar ele para hover
import { motion } from "framer-motion";

interface ModalProps {
    modalActive: boolean;
}

export const Container = styled.div`
    display: flex;
    background: ${props => props.theme.colors.secundary};
    
    `;

export const HeaderContainer = styled.div`
    z-index: 10;
    position: fixed;
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    height: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    

    @media(max-width: 770px) {
        justify-content: space-around;
    }
    
    @media (max-width: 480px) {
        height: 5.25rem;
        justify-content: space-around;
        
    }
`;

export const HeaderLogo = styled(motion.div)`
    display: grid;
    grid-template-columns: 100px 1fr;
    justify-content: center;
    align-items: center;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    } 
`;

export const ImageHeader = styled(motion.div)`
    img {
        border-radius: 50%;
    }
     @media (max-width: 720px) {
     display: none;
    }
`;
 
export const NameDev = styled(motion.div)` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled(motion.h1)`
    color: ${props => props.theme.colors.text};
    @media (max-width: 720px) {
        font-size: 1rem;
    }
    @media (max-width: 480px) {
        text-align: center;
        font-size: 1.5rem;
        
    }
`;

export const Profission = styled(motion.span)`
    justify-content: center;
    display: flex;
    font-weight: 600;
    padding: 0.225rem;
    background: ${props => props.theme.colors.background};
    border-radius: 1rem;
    @media (max-width: 480px) {
        font-size: 0.825rem;
        text-align: center;
        padding: 0.425rem;
    }
`;
export const ThemeSelect = styled(motion.div)`
    
  
`;
export const HeaderLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    align-items: center;
    width: 100%;
    margin: 0 3rem;
    @media (max-width: 770px) {
        gap: 0.825rem;
        margin: 0;
    }
    @media (max-width: 480px) {
        gap: 0.825rem;
        margin: 0;
        display: none;
    }
    @media (max-width: 350px) {
        gap: 0.425rem;
    }
`;

export const LinkExt = styled(motion.div)`
    svg{ 
        font-size: 2.5rem; 
        &:hover {
            border: 2px solid ${props => props.theme.colors.text};
        }
    }
    img {
        &:hover {
            border: 2px solid ${props => props.theme.colors.text};
            scale: 2;
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

export const LinkMenuMobile = styled.div<ModalProps>`
    display: none;
    svg {
        color: ${props => props.theme.colors.text};
       //background: ${modalActive => modalActive ? 'black' : 'white'};
        ${({modalActive}) => modalActive && css`
            background: ${props => props.theme.colors.primary};
            color: ${props => props.theme.colors.text};
        `
    };    
    }
    @media (max-width: 480px) {
        display: flex;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    nav {
    ul {
        display: flex;
        list-style: none;
        align-self: center;
        align-items: center;
        li {
            padding-left: 1rem;
            cursor: pointer;   
            a {
                display: flex;
                color: ${props => props.theme.colors.text};
                font-size: 2rem;
                padding: 1rem;
                font-weight: 900;
                border-radius: 1rem;

                &:hover {
                    //color: #29292e;
                    background: ${props => props.theme.colors.secundary};
                    transition: 0.5s;
                }
                .svg {
                display: flex;
                align-items:center;
                margin-left: 5px;
                }
            }
        }
    }
}
@media (min-width: 1080px) {
   
}

@media (max-width: 720px) {
   
}
@media (max-width: 480px) {
    
}
`;

