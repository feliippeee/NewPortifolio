import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface Props {
    selected: number;
}

export const Container = styled(motion.div)`
   width: 100%;
   display: flex;
   background: ${props => props.theme.colors.background};
`;

export const Content = styled.div`
    margin-top: 8rem;
    @media (max-width: 480px) {
        display: flex; 
        flex-direction: column;
        margin: 0;
        padding: 0.525rem;

        }

`;

export const ContentInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
    //background: ${props => props.theme.colors.primary};
    border-radius: 1rem;
    @media (max-width: 770px) {
        font-size: 1.250rem; // colocar em rem
        }
    
`;
export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 5rem 0 5rem;
    
    @media (max-width: 480px) {
        margin: 7rem 1rem 1rem 1rem;
    }
`;

export const Button = styled.button<Props>`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    padding: 1rem;
    font-size: 1.5rem;
    ${({selected}) => selected && css`
        border: 2px solid ${props => props.theme.colors.text}; 
        background: ${props => props.theme.colors.secundary};
        font-weight: bold;
    ` };
    &:hover {
        background: ${props => props.theme.colors.secundary};
        
   }
4`;
export const ProfileUser = styled.div`
    margin: 0 5rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    background: ${props => props.theme.colors.secundary};
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    @media (max-width: 770px) {        
        margin: 0 0.825rem 1rem 0.825rem;
        padding: 0;
    }
    @media (max-width: 480px) {
        width: 100%;
    }
    
`;

export const ImageProfile = styled.div`
    display: flex;
    justify-content: center;
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        
    }
`;

export const Description = styled(motion.div)`
    display: flex;
    width: 100%;
    padding: 1rem;
    h2 {
        display: flex;
        justify-content: center;
        padding: 1rem;
        margin: 1rem 5px;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.secundary};
        
    }
    p {
        font-size: 2rem;
        line-height: 3rem;
        text-align: justify;
    }
    span {
        display: flex;
        justify-content: space-evenly;
        font-size: 1.5rem;
    }
    @media (max-width: 770px) {
    }
    @media (max-width: 480px) {
        flex-direction: column;
        h2 {
            padding: 0.225rem;
            font-size: 1.4rem;
        }
    }

`;

export const ProfileUserInfo = styled(motion.div)`
    background: ${props => props.theme.colors.secundary};
    > h2{
        padding: 1rem;
        background: ${props => props.theme.colors.secundary};
        margin: 0 2rem;
        color: ${props => props.theme.colors.text};
        border-radius: 5px;
        border: 5px solid ${props => props.theme.colors.primary};
    }
    
    @media (max-width: 770px) {
       >h2 {
            margin: 0 1rem;
       } 
    }
    @media (max-width: 480px) {
        > h2 {
            margin: 0;
        }
    }
`;
export const ProfileDescription= styled(motion.div)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border-radius: 5px;
    text-align: justify;
    padding: 1rem;
    h2 {
        padding: 1rem;
        border-radius: 5px;
    }
    @media (max-width: 480px) {
        padding: 1rem;
        margin-top: 1rem;
        p {
            font-size: 1.2rem;
        }
}
    
`;

export const DescriptionProfile = styled(motion.text)``;

export const Contact1 = styled(motion.div)`
    display: grid;
    grid-template-columns: 50px 1fr;
    padding: 1rem;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    margin: 1rem 2rem;
    border-radius: 5px;
    align-items: center;
    :nth-child(6) {
        margin-bottom: 0;
    }
    svg {
        font-size: 2.5rem;
        border-radius: 5px;
    }
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme.colors.text};
    }
    &:hover {
            background: ${props => props.theme.colors.primary};
        }
    @media (max-width: 770px) {
        grid-template-columns: 40px 1fr;
        margin: 1rem;
        
        a {
            svg {
            font-size: 1.5rem;

            }
        }
    }
    @media (max-width: 480px) {
        margin: 1rem 0;
    }
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0.525rem;
    > h2 {
        display: flex;
        justify-content: center;
        padding: 1rem;
        margin: 1rem 5px;
        color: ${props => props.theme.colors.secundary};
        background: ${props => props.theme.colors.text};
        border: 5px solid ${props => props.theme.colors.primary};
    }
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        list-style: none;
        align-items: center;
        margin-bottom: 1rem;
        text-align: center;
        padding: 5px;

        li {
            display: flex;
            color: ${props => props.theme.colors.text};
            justify-content: space-between;
            align-items: center;
            background: ${props => props.theme.colors.background};
            padding: 1rem;
            height: 70px;
            font-size: 1.3rem;
            font-weight: 600;
            border-radius: 5px;
            svg {
                font-size: 3rem;
                margin-left: 10px;
                
            }
            &:hover {
                background: ${props => props.theme.colors.secundary};
                border: 2px solid ${props => props.theme.colors.primary};

            }
        }
    }
    @media (max-width: 770px) {
        ul {
            grid-template-columns: 1fr 1fr;
        li {
            font-size: 1.8rem;
        }
        }
    }
    @media (max-width: 480px) {
        ul {
            font-size: 1rem;
            grid-template-columns: 1fr;
            li {
                font-size: 1.3rem;
                height: 50px;
                svg {
                font-size: 2rem;
                margin-left: 10px;
                
                }
            }
        }
    }
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    font-size: 1.8rem; 
    color: ${props => props.theme.colors.text};             
    margin: 2rem 5rem;
    @media (max-width: 480px){
        margin: 1rem;
    }
`;

export const Title = styled.h2`
    display: flex; 
    justify-content: center;
    padding: 1.5rem;
    border-radius: 10px;
    width: 100%;
    background: ${props => props.theme.colors.secundary}; 
    @media (max-width: 480px){
        padding: 1rem;
    }
`;


export const CardGridProjects = styled(motion.div)` 
    display: flex; 
    justify-content: center;
    align-items: center;
`;

export const CardGrid = styled(motion.div)`
    height: 100%; 
    margin-bottom: 2rem;
    margin: 0 5rem;
    align-items: center;
    @media (max-width: 480px) {
        margin: 0 1rem;
        padding: 5px;
        border: 2px solid #29292e;
        margin: 0 1rem 0 1rem;
    }
`;
