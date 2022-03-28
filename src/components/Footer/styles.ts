import styled from "styled-components";
export const Footers = styled.div`
    
.footer {
    
    

}  

@media (max-width: 1080px) {
    .footer {
    background: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    margin-bottom: 0;
    align-items: center;
    
        ul {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            li {
                font-size: 1.5rem;
                padding: 1rem;
                &:hover {
                    border-radius: 1rem
                }
                > span {
                    margin-right: 1rem;
                }
                a {
                    font-size: 1.5rem;
                }
               
            }
        }
    

}  
}

@media (max-width: 720px) {
    .footer {
    background: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    margin-bottom: 0;
    align-items: center;
    
        ul {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            li {
                font-size: 1rem;
                padding: 1rem;
                &:hover {
                    border-radius: 1rem
                }
                > span {
                    margin-right: 1.5rem;
                }
                a {
                    font-size: 1.5rem;
                }
               
            }
        }
    

}   
}

@media (max-width: 426px) {
    .footer {
    background: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    margin-bottom: 0;
    align-items: center;
    
        ul {
            width: 100%;
            flex-direction: column;
            display: flex;
            justify-content: space-evenly;
            li {
                font-size: 2rem;
                padding: 1rem;
                &:hover {
                    border-radius: 1rem
                }
                > span {
                    margin-right: 1rem;
                }
                a {
                    font-size: 2rem;
                }
               
            }
        }
    

}   
}
`;

export const CardFooter = styled.div`
    background: rgb(18, 18, 20);

    //background: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    margin-bottom: 0;
    align-items: center;
    justify-content: space-evenly;

    ul {
        display: flex;
        justify-content: space-evenly;
        li {
            display: flex;
            align-items: center;
            align-self: center;
            list-style: none;
            font-size: 2rem;
            padding: 1rem;
            color: white;
            &:hover {
                color: ${props => props.theme.colors.secundary};
                border-radius: 1rem
            }
            > span {
                margin-right: 1rem;
            }
            a {
                display: flex;
                font-size: 2rem;
                color: white;
                &:hover {
                    color: ${props => props.theme.colors.secundary};
                    transition: 0.5s;
                }
            }
            div + div {
                padding-left: 0.25rem;
            }
           
        }
    }
`;
export const Dev = styled.div`

`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
`;