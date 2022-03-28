import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 1rem;
    background: #202024;
    h2 {
        color: white;
        text-align: center;
        font-size: 25px;
        background: #29292e;
        padding: 0.5rem;
        
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
        list-style: none;
        padding: 1rem;
        li {
            display: flex;
            text-decoration: none;
            background: #29292e;
            color: white;
            //background:${props => props.theme.colors.primary};
            padding: 1.5rem;
            text-align: center;
            border-radius: 1rem;
            
        }
        > li {
            margin-top: 1rem;
        }
    }   
    `;

export const Content = styled.div`
margin-top: 10rem;

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
    
`;
export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 5rem 1rem 5rem;
    height: 40px;
    `;

export const Button = styled.button`
    background: black;
    color: white;
    padding: 1rem;
    &:hover {
        background: #29292e;
        transition: 0.5s;
    }
`;
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

`;

export const ProfileUserInfo = styled.div`
    background: rgb(18, 18, 20);
    > h2{
        background: #29292e;
        margin: 0 2rem;
        color: white;
        border-radius: 5px;
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
`;

export const DescriptionProfile = styled.text``;

export const Contact1 = styled.div`
    display: grid;
    grid-template-columns: 50px 2fr;
    padding: 1rem;
    font-size: 15px;
    color: white;
    background: #29292e;
    margin: 1rem 2rem;
    border-radius: 5px;
    align-items: center;
    svg {
        font-size: 2rem;
    }
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
`;

export const About = styled.div`
    
`;


