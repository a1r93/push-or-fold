import styled from 'styled-components';

import { Column, Row } from '../../../styles/layouts';
import { Oval } from '../../Section/style';

export const Container = styled(Row)`
    grid-column-start: 1;
    grid-column-end: 14;
`;

export const SpacedColumn = styled(Column)`
    gap: 6px;
`;

export const SuitOval = styled(Oval)`
    width: 90px;
    margin: ${({ theme }) => theme.spacing([2, 0])};
`;
