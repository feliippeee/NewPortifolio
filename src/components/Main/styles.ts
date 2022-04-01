import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   display: flex;
    `;

export const Content = styled.div`

    margin-top: 10rem;
    @media (max-width: 480px) {
        display: flex; 
        flex-direction: column;
        margin: 0;
        padding: 0;

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
    background: ${props => props.theme.colors.primary};
    border-radius: 1rem;
    @media (max-width: 770px) {
        font-size: 20px;
        }
    
`;
export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 5rem 1rem 5rem;
    height: 40px;
    @media (max-width: 480px) {
        margin: 7rem 1rem 1rem 1rem;
    }
`;

export const Button = styled.button`
    background: black;
    color: white;
    padding: 1rem;
    &:hover {
        background: #29292e;
        transition: 0.5s;
   }
4`;
export const ProfileUser = styled.div`
    margin: 0 5rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    background: rgb(18, 18, 20);
    //background: ${props => props.theme.colors.primary};
    padding: 1rem;
    border-radius: 0 0 1rem 1rem;
    @media (max-width: 770px) {        
        margin: 0 0.825rem 1rem 0.825rem;
        padding: 0;
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

export const Description = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    h2 {
        margin-bottom: 2rem;
        padding: 1rem;
        text-align: center;
        background: ${props => props.theme.colors.primary};
        border-radius: 1rem;
    }
    p {
        font-size: 2rem;
        text-align: justify;
    }
    span {
        display: flex;
        justify-content: space-evenly;
        font-size: 1.5rem;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0.5rem;
    }
    @media (max-width: 770px) {
        
        p {
            font-size: 1.5rem;
        }
    }

`;

export const ProfileUserInfo = styled.div`
    background: rgb(18, 18, 20);
    > h2{
        background: #29292e;
        margin: 0 2rem;
        color: white;
        border-radius: 5px;
    }
    @media (max-width: 480px) {
        > h2 {
            margin: 0;
        }
    }
`;
export const ProfileDescription= styled.div`
    background: #202024;
    color: white;
    border-radius: 5px;
    text-align: justify;
    padding: 1rem 4rem;
    h2 {
        background: #29292e;
        border-radius: 5px;
    }
    @media (max-width: 480px) {
        padding: 1rem;
        p {
            font-size: 1.2rem;
        }
    }
`;

export const DescriptionProfile = styled.text``;

export const Contact1 = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    padding: 1rem;
    font-size: 15px;
    color: white;
    background: #29292e;
    margin: 1rem 2rem;
    border-radius: 5px;
    align-items: center;
    svg {
        font-size: 2.5rem;
        border-radius: 5px;
    }
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
    @media (max-width: 770px) {
        grid-template-columns: 30px 1fr;
        margin: 1rem;
        svg {
            font-size: 1.5rem;
        } 
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
    
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    font-size: 22px; 
    color: white;             
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
    background: rgb(18,18,20); 
    @media (max-width: 480px){
        padding: 1rem;
    }
`;


export const CardGridProjects = styled.div` 
    display: flex; 
    justify-content: center;
    align-items: center;
`;

export const CardGrid = styled.div`
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
