import styled from 'styled-components';

import colors from '../../colors';
import { Row } from '../../styles/layouts';

export const SwitchContainer = styled(Row)`
    cursor: pointer;
`;

export const Label = styled.span`
    font-size: 1.2rem;
    margin-right: 32px;
    width: 80px;
`;

export const SwitchButton = styled.div<{ $isChecked: boolean }>`
    position: relative;
    transition: all 0.3s ease-in;
    width: 60px;
    height: 30px;
    background-color: ${({ $isChecked }) => ($isChecked ? '#97361c' : '#83636b')};
    border-radius: 0 125px 125px 0;
    border: 3px solid white;
    cursor: pointer;
    margin-right: 8px;
`;

export const SwitchAnimation = styled.div<{ $isChecked: boolean }>`
    position: absolute;
    top: 3px;
    height: 18px;
    width: 18px;
    transition: all 500ms ease-in-out;

    ${({ $isChecked }) =>
        $isChecked
            ? `
                background-color: ${colors.red};
                border-radius: 50%;
                left: 32px;
                transform: rotate(180deg);
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);`
            : `
                left: 3px;
                background-color: ${colors.pink};
                transform: rotate(0deg);
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    `}
`;
