import styled, { StyledProps } from 'styled-components';

import { TPaletteColors } from '../../styles/themes/types';

const getMargin = (value: number[]) => value.map((current: number) => `${current}px`).join(' ');

export const SectionContainer = styled.div<{ background: TPaletteColors; span?: number; margin?: number[] }>`
    display: flex;
    flex-direction: column;
    flex: ${({ span = 0 }) => span};
    margin: ${({ margin = [12, 0] }) => getMargin(margin)};
    padding: 12px;
    border-radius: 11px;
    background: ${({ background, theme }) => theme.palette[background]};
    transition: all ${({ theme }) => theme.transitionDuration}ms ease-in-out;
`;

export const Title = styled.h1`
    font-size: 1rem;
`;

export const SectionWrapper = styled.div<{ gap: number; grid: number }>`
    display: grid;
    grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
    grid-gap: ${({ gap }) => gap}px;
`;

interface ICellProps {
    isSelected: boolean;
    background: TPaletteColors;
    selectedBackground: TPaletteColors;
    isHighlighted?: boolean;
}

const getCellBackground = ({
    isSelected,
    background,
    selectedBackground,
    isHighlighted,
    theme,
}: StyledProps<ICellProps>) => {
    if (isSelected) return theme.palette[selectedBackground];

    return isHighlighted ? theme.palette.tertiary : theme.palette[background];
};

export const Cell = styled.div<ICellProps>`
    background: ${getCellBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    cursor: pointer;
    color: white;
    border-radius: ${({ theme }) => theme.radius}px;
    font-size: ${({ isSelected }) => (isSelected ? '0.75rem' : '0.7rem')};
    font-weight: ${({ isSelected }) => (isSelected ? 'bolder' : '400')};
    transition: background ${({ theme }) => theme.transitionDuration}ms ease-in-out,
        border-radius ${({ theme }) => theme.transitionDuration}ms ease-in-out;

    &:hover {
        font-size: 0.75rem;
        font-weight: bolder;
    }
`;

export const Oval = styled(Cell)`
    width: 42px;
    border-radius: ${({ theme }) => theme.ovalRadius}px;
`;
