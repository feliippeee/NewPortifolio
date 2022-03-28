import styled from "styled-components";
export const Projects = styled.div`
  .container h1 {
    margin: 2rem 8rem 2rem 8rem ;
            padding: 1rem;
            text-align: center;
            background: ${props => props.theme.colors.primary};
            border-radius: 1rem;
}
.pages {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem;
    .section {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        .img {
           
            display: flex;
            width: 500;
            height: 500;
            cursor: pointer;
        }
        .nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: ${props => props.theme.colors.primary};
            border-radius:0 0 1rem 1rem;
            .projectName {
                display: flex;
                padding: 1.25rem 0 0 0;
                justify-content: center;
                font-size: 1.5rem;
            }
            ul {
                display: flex;
                justify-content: center;
                list-style: none;    
                padding: 1rem 0 1rem 0;
                
            }
            li {
                text-transform: capitalize;
                font-size: 1rem;
                font-weight: 400;
                padding: 0.650rem;
                background: ${props => props.theme.colors.secundary};
                color: ${props => props.theme.colors.text};

            }
            li + li {
               margin-left: 0.25rem;
            }
        }
        .url {
            display: flex;
            justify-content: center;
            padding: 0.250rem;
            a {
                display: flex;
                align-items: center;
                font-size: 1.5rem;
                div {
                    display: flex;
                    align-items: center;
                    padding-left: 0.25rem;
                }
            }
        }
    }
}
@media (max-width: 1080px) {
    .pages {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
}

@media (max-width: 720px) {
    .container h1 {
    margin: 2rem 8rem 2rem 8rem ;
            padding: 1rem;
            text-align: center;
            background: ${props => props.theme.colors.primary};
            border-radius: 1rem;
}
.pages {
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
    .section {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        .img {
           
            display: flex;
            width: 500;
            height: 500;
            cursor: pointer;
        }
        .nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: ${props => props.theme.colors.secundary};
            border-radius:0 0 1rem 1rem;
            .projectName {
                display: flex;
                padding: 0.250rem;
                justify-content: center;
                font-size: 1.5rem;
            }
            ul {
                display: flex;
                justify-content: center;
                list-style: none;    
                
            }
            li {
                text-transform: capitalize;
                font-size: 0.650rem;
                font-weight: bold;
                padding: 0.650rem;
                background: ${props => props.theme.colors.primary};
                color: ${props => props.theme.colors.text};
                border-radius: 1rem;
            }
        }
        .url {
            display: flex;
            justify-content: center;
            padding: 0.250rem;
        }
    }
}
}

@media (max-width: 425px) {
    .container h1 {
    margin: 2rem 8rem 2rem 8rem ;
            padding: 1rem;
            text-align: center;
            background: ${props => props.theme.colors.primary};
            border-radius: 1rem;
}
.pages {
    display: grid;
    grid-template-columns: 1fr;
    padding: 2rem;
    .section {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        .img {
           
            display: flex;
            width: 500;
            height: 500;
            cursor: pointer;
        }
        .nav {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: ${props => props.theme.colors.secundary};
            border-radius:0 0 1rem 1rem;
            .projectName {
                display: flex;
                padding: 0.250rem;
                justify-content: center;
                font-size: 1.5rem;
            }
            ul {
                display: flex;
                justify-content: center;
                list-style: none;  
                  
            }
            li {
                text-transform: capitalize;
                font-size: 1.7rem;
                font-weight: bold;
                padding: 0.650rem;
                background: ${props => props.theme.colors.primary};
                color: ${props => props.theme.colors.text};
                border-radius: 1rem;
            }
        }
        .url {
            display: flex;
            justify-content: center;
            padding: 0.250rem;
            font-size: 1.5rem;
        }
    }
    }
    
}

`;