import styled from "styled-components";
import { shade } from "polished"; //utilizar ele para hover

export const Container = styled.div`
    display: flex;
    background: ${props => props.theme.colors.background};

`;

export const HeaderContainer = styled.div`
    position: fixed;
    background: rgb(18, 18, 20);
    width: 100%;
    height: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    @media (max-width: 480px) {
        height: 4.25rem;
        justify-content: space-around;
        
    }
`;

export const HeaderLogo = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    } 
`;

export const ImageHeader = styled.div`
    img {
        border-radius: 50%;
    }
     @media (max-width: 720px) {
     display: none;
    }
`;
 
export const NameDev = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Name = styled.h1`
    color: white;
    @media (max-width: 480px) {
        text-align: center;
        font-size: 1rem;
        
    }
`;

export const Profission = styled.span`
    justify-content: center;
    display: flex;
    font-weight: 600;
    padding: 0.225rem;
    background: ${props => props.theme.colors.background};
    border-radius: 1rem;
    @media (max-width: 480px) {
        font-size: 0.625rem;
        text-align: center;
        padding: 0.125rem;
    }
`;

export const HeaderLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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

export const LinkExt = styled.div`
    svg{ 
        font-size: 2.5rem; 
        
    }
    svg:hover {
        font-size: 1.5em;
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

export const LinkMenuMobile = styled.div`
    display: none;
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
                color: white;
                font-size: 2rem;
                padding: 1rem;
                font-weight: 900;
                border-radius: 1rem;

                &:hover {
                    color: #29292e;
                    //background: ${props => props.theme.colors.secundary};
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

