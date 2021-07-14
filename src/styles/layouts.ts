import styled from 'styled-components';

interface ISpaced {
    margin?: number[];
    padding?: number[];
}

interface IFlexBox {
    justify?: string;
    align?: string;
    span?: number;
    inline?: boolean;
}

interface IGrid {
    cols?: number;
    rows?: number;
    gap?: number;
}

const getSpacing = (value: number[]) => value.map((current: number) => `${current * 8}px`).join(' ');

export const Spaced = styled('div')<ISpaced>`
    margin: ${({ margin = [0] }) => getSpacing(margin)};
    padding: ${({ padding = [0] }) => getSpacing(padding)};
`;

export const Container = styled(Spaced)<IFlexBox>`
    justify-content: ${({ justify = 'initial' }) => justify};
    align-items: ${({ align = 'initial' }) => align};
    flex: ${({ span = 1 }) => span};
    display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
`;

export const Row = styled(Container)`
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
    flex-direction: row;
`;

export const Column = styled(Container)`
    height: 100%;
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
    flex-direction: column;
`;

export const Grid = styled(Container)<IGrid>`
    display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};
    grid-auto-flow: row dense;
    grid-gap: ${({ gap = 2, theme }) => getSpacing([gap])};
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(${({ cols = 1 }) => cols}, 1fr);
    grid-template-rows: repeat(${({ rows = 1 }) => rows}, 1fr);
`;
