import styled from "styled-components";
export const Footers = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1rem;
    `;

export const CardFooter = styled.div`
    padding: 1rem;
    background: rgb(18, 18, 20);
    width: 100%;
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
    @media (max-width: 480px) {
        ul {

            li { 
                font-size: 1rem; 
                
                
            }
            }
        }
`;
export const Dev = styled.div`

`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 2.5rem;
    gap: 1rem;
    align-items: center;
    @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 0;
        
    }
`;