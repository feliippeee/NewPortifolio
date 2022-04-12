import styled from 'styled-components';
interface ModalProps {
    modalActive: boolean;
}

export const Container = styled.div`
    position: absolute;
    top: 4rem;
    background: #222;
    width: 100%;
    
    
`;

export const Modal = styled.div<ModalProps>`
    z-index: 9;
    display: ${modalActive => modalActive? 'flex' : 'none' };

    background: black;
    width: 90%;
    height: 90%;
    transition: all 5s;
    ul {
        list-style: none;
        text-decoration: none;

    }
`;

export const HeaderLinks = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    padding: 1rem;
    `;

export const LinkExt = styled.div`
        background: black;
     a {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        background: #555;
        padding: 1rem;
        
        svg{ 
            font-size: 2.5rem; 
            margin-right: 1.5rem;
            
        }
        p {
            color: white;
            text-align: center;
            font-size: 1rem;
            font-weight: 600;
        }
    svg:hover {
        font-size: 1.5em;
    }
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
        p {
            font-size: 5px
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