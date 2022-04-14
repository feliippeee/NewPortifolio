import styled from 'styled-components';


export const Container = styled.div`
     display: flex;
     margin-bottom: 2rem;
     //background: rgb(18,18,20);
    border: 2px solid rgb(18,18,20);
     :first-child {
        margin-top: 0;
    }
    @media (max-width: 480px) {
      justify-content: center;
      width: 100%;
      background: none ;
      border-bottom: 2px solid #29292e;
      :last-child {
          margin-bottom: 0;
          border-bottom: none;
      }
    }
`;
export const Projects = styled.div`
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
    font-size: 2.5rem;
    text-align: center;
    background: rgb(18,18,20);
    padding: 1rem;
    margin: 1rem 1rem 5px 1rem;
    @media (max-width: 770px) {
        margin: 1rem 0rem 5px 0rem;
    }
    @media (max-width: 480px) {
        margin: 0 1rem;
        font-size: 1rem;
    }
`;

export const SubTitle = styled.text`
    font-size: 1.8rem;
    padding: 1rem;
    line-height: 3rem;
    text-align: justify;

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
    

`;

export const LinkGit = styled.div`
    text-align: center;
    margin: 2rem 0;
    transition: 0.5s;
    width: 100%;
    
    a {
        display: flex;
        justify-content: center;
        background: #29292e;
        color: white;
        padding: 2rem;
        margin: 0 1rem;
        font-size: 2rem;
        svg {
            margin-right: 1rem;
        } 
        &:hover {
            background: #444;
            

        }

    }
    @media (max-width: 770px) {
        
    }
    
    @media (max-width: 480px) {
       a {
           padding: 1rem;
           font-size: 1rem;
       }
    }
    @media (max-width: 425px) {
       
    }
   
`;

export const CardImageProject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ImageProject = styled.img`
    width: 95%;
    height: 95%;
    img {
        width: 95%;
        height: 95%;
        object-fit: fill;
        border-radius: 5px;
        
    }
    @media (max-width: 480px) {
        padding: 10px;
        height: 200px;
        img {
            object-fit: cover;
        }
    
    }
    
`;
export const DescriptionProject = styled.div`
    display: flex;
    flex-direction: column;
    background: #202024;
    color: white;
    padding: 5px;
    @media (max-width: 480px) {
        padding: 20px 0;
        
    }
    
`;