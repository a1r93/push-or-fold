import styled from 'styled-components';

export const Container = styled.button`
    height: 32px;
    padding: 0 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.palette.pending};
    transition: all ${({ theme }) => theme.transitionDuration}ms ease-in-out;
    border-radius: 8px;
    border: 0;

    color: #fff;
    font-size: 0.8rem;
    font-weight: bolder;

    cursor: pointer;

    &:hover {
        filter: brightness(0.9);
    }

    &:active {
        filter: brightness(0.7);
    }
`;
