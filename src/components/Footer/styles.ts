import styled from "styled-components";
export const Footers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    background: rgb(18, 18, 20);
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
    `;

export const CardFooter = styled.div`
    padding: 1rem;
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
        height: 60px;
        ul {

            li { 
                font-size: 1rem; 
                
                
            }
            }
        }
`;

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr );
    font-size: 2.5rem;
    gap: 1rem;
    align-items: center;
    @media (max-width: 480px) {
        font-size: 1.8rem;
        padding: 0;
        
    }
    @media (max-width: 350px) {
        
        
    }
    `;

    export const DevCreate = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        align-self: center;
        border: 2px solid white;
        margin-right: 1rem;
        @media (max-width: 480px) {
        margin: 2px;
        
    }
    `;
    export const Dev = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        
        font-size: 1.5rem;
        border: 5px solid #29292e;
        padding: 0.625rem;
    
        text-align: center;
        color: white;
        svg {
            margin-left: 0.5rem;
        }
        @media (max-width: 770px) {
        font-size: 1.3rem;
        
    }
        @media (max-width: 480px) {
        font-size: 1rem;
        
    }
    `;