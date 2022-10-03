import { useEffect, useState } from 'react';

import { Cell } from '../../Section/style';
import { compareHand } from '../../Solution/calculator/calculator';
import ranges from '../../Solution/ranges';
import { TAnte, TPosition } from '../../Solution/ranges/types';
import { cards, formatGridHands } from '../helpers';

interface IProps {
    selectedHand: string | undefined;
    toggleIsSelected: (value: string) => void;
    ante: TAnte | undefined;
    position: TPosition | undefined;
    stack: number | undefined;
}

const HandsGrid = ({ selectedHand, toggleIsSelected, ante, position, stack }: IProps) => {
    const [highlightedRange, setHighlightedRange] = useState<string[]>([]);

    useEffect(() => {
        if (!stack || !position || !ante) {
            setHighlightedRange([]);
            return;
        }

        const currentRange = ranges[ante][position][stack - 1];
        if (!currentRange.length) {
            setHighlightedRange(['all']);
            return;
        }
        setHighlightedRange(currentRange);
    }, [ante, position, stack]);

    return (
        <>
            {cards.map((letter: string) =>
                cards.map((letter2: string) => {
                    const hand = formatGridHands(letter, letter2);

                    return (
                        <Cell
                            key={hand}
                            isSelected={selectedHand === hand}
                            onClick={() => toggleIsSelected(hand)}
                            background={letter === letter2 ? 'primary-variant' : 'primary'}
                            selectedBackground="selected"
                            isHighlighted={
                                highlightedRange[0] === 'all' ||
                                highlightedRange.some((currentHand: string) => compareHand(hand, currentHand))
                            }
                        >
                            {hand}
                        </Cell>
                    );
                }),
            )}
        </>
    );
};

export default HandsGrid;
