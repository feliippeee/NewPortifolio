import styled, { css } from "styled-components";
interface Props {
    isVisible: boolean;
}
export const Container = styled.div`
background-color: red;
.Modal {
        background: #111;

    }
`;

export const HeaderLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2rem;
`;

export const LinkExt = styled.div`
    background: lightslategrey;
    a {
        display: grid;
        grid-template-columns: 70px 1fr;
        align-items: center;
        color: white;
    }
    svg {
        font-size: 2.5rem;
        margin: 1rem;
    }
    img {
        margin: 1rem;
    }
`;
