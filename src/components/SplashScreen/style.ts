import styled, { keyframes } from 'styled-components';

export const SplashScreenContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.palette.background};
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing([2])};

    &:before {
        color: white;
        content: '';
        display: block;
        font-size: 14px;
        left: 12px;
        position: absolute;
        top: 12px;
        transition: opacity 0.1s;
        opacity: 0;
    }
`;

export const WelcomeContainer = styled.div`
    text-align: center;
    height: 45px;
    overflow: hidden;
`;

const slideIn = keyframes`
    0% {
        transform: translateY(100%);
    }
    30% {
        transform: translateY(0);
    }
    70% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100%);
    }
`;

export const Char = styled.div<{ delay: number }>`
    backface-visibility: hidden;
    color: white;
    display: inline-block;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 0.1em;
    overflow: hidden;

    animation: ${slideIn} 2.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
    transform: translateY(100%);

    animation-delay: ${({ delay }) => delay * 0.04}s;
`;
