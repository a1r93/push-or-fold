import styled from 'styled-components';

import { TPaletteColors } from '../../styles/themes/types';

export const SolutionWrapper = styled.div<{ background: TPaletteColors }>`
    display: flex;
    padding: 32px;
    background: ${({ background, theme }) => theme.palette[background]};
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    height: 122px;
    transition: all ${({ theme }) => theme.transitionDuration}ms ease-in-out;
`;

export const SolutionText = styled.h3`
    color: white;
`;
