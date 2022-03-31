import styled from 'styled-components';


export const Container = styled.div`
     display: flex;
     margin-bottom: 2rem;
     background: rgb(18,18,20);

     :first-child {
        margin-top: 0;
    }
    @media (max-width: 720px) {
      justify-content: center;
      width: 100%;
    }
`;
export const Projects = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    margin: 1rem;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
        width: 100%;
    }
    @media (max-width: 1080px) {
        grid-template-columns: 1fr;
        
        margin: 0;

    }
    
`;

export const Title = styled.text`
    font-size: 20px;
    text-align: center;
    background: rgb(18,18,20);
    padding: 1rem;
    margin: 1rem 1rem 5px 1rem;
    @media (max-width: 480px) {
        margin: 0;
    }
`;

export const SubTitle = styled.text`
    font-size: 16px;
    padding: 1rem;
    text-align: justify;
    

`;

export const LinkGit = styled.div`
    text-align: center;
    margin: 2rem 0;
    transition: 0.5s;
    a {
        background: #29292e;
        padding: 1rem 8rem;
        color: white;
        &:hover {
            background: #444;
            

        }
    }
`;
export const ImageProject = styled.img`
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 5px;
        
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