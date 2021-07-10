import styled from 'styled-components';

import colors, { Color } from '../../colors';

export const SolutionWrapper = styled.div<{ background: Color }>`
    display: flex;
    padding: 32px;
    background: ${({ background }) => colors[background]};
    align-items: center;
    justify-content: center;
    border-radius: 11px;
    height: 140px;
`;

export const SolutionText = styled.h2`
    color: white;
`;
