import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50px 2fr;
    padding: 1rem;
    font-size: 15px;
    color: white;
    background: #29292e;
    margin: 1rem 2rem;
    border-radius: 5px;
    align-items: center;
    svg {
        font-size: 2rem;
    }
    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
`;