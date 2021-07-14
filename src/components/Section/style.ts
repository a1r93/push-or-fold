import styled from 'styled-components';

import { TPaletteColors } from '../../styles/themes/types';

const getMargin = (value: number[]) => value.map((current: number) => `${current}px`).join(' ');

export const SectionContainer = styled.div<{ background: TPaletteColors; span?: number; margin?: number[] }>`
    display: flex;
    flex-direction: column;
    flex: ${({ span = 0 }) => span};
    margin: ${({ margin = [16, 0] }) => getMargin(margin)};
    padding: 16px;
    border-radius: 11px;
    background: ${({ background, theme }) => theme.palette[background]};
    transition: all ${({ theme }) => theme.transitionDuration}ms ease-in-out;
`;

export const Title = styled.h1``;

export const SectionWrapper = styled.div<{ gap: number; grid: number }>`
    display: grid;
    grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
    grid-gap: ${({ gap }) => gap}px;
    height: 100%;
`;

export const Cell = styled.div<{ isSelected: boolean; background: TPaletteColors; selectedBackground: TPaletteColors }>`
    background: ${({ isSelected, selectedBackground, background, theme }) =>
        isSelected ? theme.palette[selectedBackground] : theme.palette[background]};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    color: white;
    border-radius: ${({ theme }) => theme.radius}px;
    font-size: ${({ isSelected }) => (isSelected ? '1.1rem' : '1rem')};
    font-weight: ${({ isSelected }) => (isSelected ? 'bolder' : '400')};
    transition: background ${({ theme }) => theme.transitionDuration}ms ease-in-out,
        border-radius ${({ theme }) => theme.transitionDuration}ms ease-in-out;

    &:hover {
        font-size: 1.1rem;
        font-weight: bolder;
    }
`;

export const Oval = styled(Cell)`
    width: 65px;
    border-radius: ${({ theme }) => theme.ovalRadius}px;
`;
