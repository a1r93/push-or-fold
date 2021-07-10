import { Button } from '../Button';
import Section from '../Section';
import { Cell } from '../Section/style';

const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

const getLetters = (letter1: string, letter2: string) => {
    if (letter1 === letter2) {
        return `${letter1}${letter2}`;
    }

    const letter1Idx = cards.findIndex((current: string) => current === letter1);
    const letter2Idx = cards.findIndex((current: string) => current === letter2);

    return letter1Idx > letter2Idx ? `${letter2}${letter1}o` : `${letter1}${letter2}s`;
};

interface IProps {
    selectedHand: string | undefined;
    setSelectedHand: (value: string | undefined) => void;
    onReset: () => void;
}

const HandsGrid = ({ onReset, selectedHand, setSelectedHand }: IProps) => {
    const toggleIsSelected = (value: string) => {
        if (selectedHand === value) {
            setSelectedHand(undefined);
        } else {
            setSelectedHand(value);
        }
    };

    return (
        <Section
            title="Choose a hand"
            grid={13}
            background="orange"
            headerSlot={<Button onClick={onReset}>Reset all</Button>}
        >
            {cards.map((letter: string) =>
                cards.map((letter2: string) => {
                    const hand = getLetters(letter, letter2);

                    return (
                        <Cell
                            key={hand}
                            isSelected={selectedHand === hand}
                            onClick={() => toggleIsSelected(hand)}
                            background={letter === letter2 ? 'pink' : 'red'}
                            selectedBackground="green"
                        >
                            {hand}
                        </Cell>
                    );
                }),
            )}
        </Section>
    );
};

export default HandsGrid;
