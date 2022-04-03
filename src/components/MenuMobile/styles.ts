import styled, { css } from "styled-components";
interface Props {
    isVisible: boolean;
}
export const Container = styled.div<Props>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 2rem;
    display: none;
    right: 5px;
    bottom: 0;
    z-index: 5;
    justify-content: center;
    background: red;
    opacity: 0;
    pointer-events: none;
    
    transition: .5s;
    transform: translateY(50px);

    ${({isVisible}) => isVisible === true && css`
    opacity: 1;
    display: flex;
    pointer-events: auto; 
    transform: translateY(0px);
    > svg {
        cursor: pointer;
    }

    ` }
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
    } 
    > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`;