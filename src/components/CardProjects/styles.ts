import { motion } from 'framer-motion';
import styled from 'styled-components';


export const Container = styled(motion.div)`
    display: flex;
    margin-bottom: 2rem;
    border: 2px solid ${props => props.theme.colors.secundary};
     :first-child {
        margin-top: 0;
    }
    @media (max-width: 480px) {
      justify-content: center;
      width: 100%;
      background: none ;
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      :last-child {
          margin-bottom: 0;
          border-bottom: none;
      }
    }
`;
export const Projects = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1rem;
    @media (max-width: 1080px) {
        margin: 0;
        
    }
    @media (max-width: 770px) {
        width: 100%;
    }
    @media (max-width: 480px){
        gap: 0;
    }
    
`;

export const Title = styled.text`
    font-size: 1.8rem;
    text-align: center;
    background: ${props => props.theme.colors.secundary};
    padding: 1rem;
    margin: 1rem 1rem 5px 1rem;
    @media (max-width: 770px) {
        margin: 1rem 0rem 5px 0rem;
    }
    @media (max-width: 480px) {
        margin: 0 1rem;
        font-size: 1.5rem;
    }
`;

export const SubTitle = styled.text`
    font-size: 1.5rem;
    padding: 1rem;
    margin: 1rem;
    line-height: 3rem;
    text-align: justify;
    border: 2px solid #999;
    height: 300px;
    overflow: hidden;
    position: relative;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        background: red;

    }

    @media (max-width: 480px) {
        padding: 1rem;
    }

`;

export const LinkGit = styled.div`
    text-align: center;
    margin: 1rem 0;
    transition: 0.5s;
    width: 100%;    
    
    a {
        display: flex;
        justify-content: center;
        background:${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.text};
        padding: 1rem;
        margin: 0 1rem;
        font-size: 1rem;
        border-radius: 6px;
        svg {
            margin-right: 1rem;
        } 
        &:hover {
            background: ${props => props.theme.colors.primary};
            
        }

    }
    @media (max-width: 770px) {
        
    }
    
    @media (max-width: 480px) {
        a {
            padding: 1rem;
           font-size: 1.3rem;
           margin: 0 1rem;
        }
    }
    @media (max-width: 425px) {
        
    }
    
    `;
export const Links = styled.div`
 display: flex;
 justify-content: space-between;
 @media (max-width: 480px) {
     flex-direction: column;

 }

`;
export const LinkPage = styled.div`
    text-align: center;
    margin: 1rem 0;
    transition: 0.5s;
    width: 100%;
    
    a {
        display: flex;
        justify-content: center;
        background:${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.text};
        padding: 1rem;
        margin: 0 1rem;
        font-size: 2rem;
    }
`;

export const CardImageProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ImageProject = styled.img`
    width: 100%;
    height: 400px;
    padding: 0 1rem;
    
    img {
        object-fit: fill;
        border-radius: 5px;
        
    }
    @media (max-width: 480px) {
        height: 200px;
        img {
            object-fit: cover;
        }
    
    }
    
`;
export const DescriptionProject = styled.div`
    display: flex;
    flex-direction: column;
    background:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 5px;
    @media (max-width: 480px) {
        padding: 20px 0;
        
    }
    
`;