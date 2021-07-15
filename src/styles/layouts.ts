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

export const Spaced = styled('div')<ISpaced>`
    margin: ${({ margin = [0], theme }) => theme.spacing(margin)};
    padding: ${({ padding = [0], theme }) => theme.spacing(padding)};
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
