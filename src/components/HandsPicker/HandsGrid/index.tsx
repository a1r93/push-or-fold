import { Cell } from '../../Section/style';
import { cards, formatGridHands } from '../helpers';

interface IProps {
    selectedHand: string | undefined;
    toggleIsSelected: (value: string) => void;
}

const HandsGrid = ({ selectedHand, toggleIsSelected }: IProps) => {
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
                            background={letter === letter2 ? 'tertiary' : 'primary'}
                            selectedBackground="selected"
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
