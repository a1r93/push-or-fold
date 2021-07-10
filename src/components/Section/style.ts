import styled from 'styled-components';

import colors, { Color } from '../../colors';

const getMargin = (value: number[]) => value.map((current: number) => `${current}px`).join(' ');

export const SectionContainer = styled.div<{ background: Color; span?: number; margin?: number[] }>`
    display: flex;
    flex-direction: column;
    flex: ${({ span = 0 }) => span};
    margin: ${({ margin = [16, 0] }) => getMargin(margin)};
    padding: 16px;
    background: ${({ background }) => colors[background]};
    border-radius: 11px;
`;

export const Title = styled.h1`
    padding-bottom: 16px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SectionWrapper = styled.div<{ gap: number; grid: number }>`
    display: grid;
    grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
    grid-gap: ${({ gap }) => gap}px;
    height: 100%;
`;

export const Cell = styled.div<{ isSelected: boolean; background: Color; selectedBackground: Color }>`
    background: ${({ isSelected, selectedBackground, background }) =>
        isSelected ? colors[selectedBackground] : colors[background]};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    font-size: ${({ isSelected }) => (isSelected ? '1.1rem' : '1rem')};
    font-weight: ${({ isSelected }) => (isSelected ? 'bolder' : '400')};

    &:hover {
        font-size: 1.1rem;
        font-weight: bolder;
    }
`;
