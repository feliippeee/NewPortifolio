import styled from "styled-components";
import { shade } from "polished"; //utilizar ele para hover
export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background: ${props => props.theme.colors.background};

header {
position: fixed;
background: rgb(18, 18, 20);
width: 100%;
height: 6.25rem;
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1rem;
    .container {
        display: grid;
        grid-template-columns: 100px 1fr;
        justify-content: center;
        align-items: center;
        h1 {
            color: white;
        }
       span {
        justify-content: center;
        display: flex;
        font-weight: 600;
        background: ${props => props.theme.colors.background};
        border-radius: 1rem;
       }
    }
}
`;
export const HeaderLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 15rem;
    margin: 0 3rem;
`;

export const LinkExt = styled.div``;
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
`;
