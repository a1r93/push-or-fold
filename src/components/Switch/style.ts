import styled from 'styled-components';

import { Row } from '../../styles/layouts';

export const SwitchContainer = styled(Row)`
    cursor: pointer;
`;

export const Label = styled.span`
    font-size: 0.9rem;
`;

export const SwitchButton = styled.div<{ $isChecked: boolean }>`
    position: relative;
    transition: all 0.3s ease-in;
    width: 40px;
    height: 20px;
    background-color: ${({ $isChecked }) => ($isChecked ? '#297067' : '#83636b')};
    border-radius: 0 125px 125px 0;
    border: 2px solid white;
    cursor: pointer;
    margin: ${({ theme }) => theme.spacing([0, 4, 0, 2])};
`;

export const SwitchAnimation = styled.div<{ $isChecked: boolean }>`
    position: absolute;
    top: 1px;
    height: 13.5px;
    width: 13.5px;
    transition: all ${({ theme }) => theme.transitionDuration}ms ease-in-out;

    ${({ $isChecked, theme }) =>
        $isChecked
            ? `
                background-color: ${theme.palette.primary};
                border-radius: 50%;
                left: 21px;
                transform: rotate(180deg);
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);`
            : `
                left: 1px;
                background-color: ${theme.palette.tertiary};
                transform: rotate(0deg);
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    `}
`;
