import { createGlobalStyle  } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    a { 
      text-decoration: none;
    }
    body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};

  }
  
  body, input, button {
    font: 400 1rem "Roboto", sans-serif;

}
button {
  cursor: pointer;
}

@media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}
@media (max-width: 770px) {
    html {
        font-size: 87.5%;
    }
  
@media (max-width: 480px) {
      html {
        font-size: 80%;
      }
    }
@media (max-width: 320px) {
  html {
    font-size: 70%;
  }
}    
}

`;