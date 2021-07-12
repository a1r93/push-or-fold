import { useEffect, useState } from 'react';

import { Color } from '../../colors';
import { compareHand } from './calculator/calculator';
import ranges from './ranges';
import { TAnte, TPosition } from './ranges/types';
import { SolutionText, SolutionWrapper } from './style';

interface ISolutionProps {
    hand?: string;
    stack?: number;
    position?: TPosition;
    ante?: TAnte;
}

interface IMessage {
    yes: string;
    no: string;
    selecting: string;
}

const message: IMessage = {
    yes: 'This is a push!',
    no: `Just fold this`,
    selecting: 'Waiting...',
};

const getColor = (state: keyof IMessage): Color => {
    if (state === 'yes') {
        return 'green';
    }
    if (state === 'selecting') {
        return 'blue';
    }

    return 'red';
};

const Solution = ({ ante, hand, stack, position }: ISolutionProps) => {
    const [state, setState] = useState<keyof IMessage>('selecting');

    useEffect(() => {
        if (!hand || !stack || !position || !ante) {
            setState('selecting');
            return;
        }

        const currentRange = ranges[ante][position][stack - 1];
        if (!currentRange.length) {
            setState('yes');
            return;
        }
        const isInRange = currentRange.some((currentHand: string) => compareHand(hand, currentHand));
        setState(isInRange ? 'yes' : 'no');
    }, [ante, hand, stack, position]);

    return (
        <SolutionWrapper background={getColor(state)}>
            <SolutionText>{message[state]}</SolutionText>
        </SolutionWrapper>
    );
};

export default Solution;
