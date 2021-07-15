import { useEffect, useState } from 'react';

import { Cell } from '../../Section/style';
import { cards } from '../helpers';
import { Container, SpacedColumn, SuitOval } from './style';

interface IProps {
    selectedHand: string | undefined;
    setSelectedHand: (value: string | undefined) => void;
}

const InlinePicker = ({ selectedHand, setSelectedHand }: IProps) => {
    const splittedSelected = selectedHand?.split('');
    const [card1, setCard1] = useState<string | undefined>(splittedSelected?.[0]);
    const [card2, setCard2] = useState<string | undefined>(splittedSelected?.[1]);
    const [suit, setSuit] = useState<string | undefined>(splittedSelected?.[2]);

    useEffect(() => {
        if (!card1 || !card2) {
            return;
        }
        if (card1 === card2) {
            setSelectedHand(`${card1}${card2}`);
            return;
        }

        if (!suit) {
            return;
        }

        const card1Idx = cards.findIndex((current: string) => current === card1);
        const card2Idx = cards.findIndex((current: string) => current === card2);
        const nextSelectedHand = card1Idx > card2Idx ? `${card2}${card1}${suit}` : `${card1}${card2}${suit}`;
        setSelectedHand(nextSelectedHand);
    }, [card1, card2, suit]);

    const toggleCard1 = (value: string) => {
        if (card1 === value) {
            setCard1(undefined);
            setSelectedHand(undefined);
        } else {
            setCard1(value);
        }
    };

    const toggleCard2 = (value: string) => {
        if (card2 === value) {
            setCard2(undefined);
            setSelectedHand(undefined);
        } else {
            setCard2(value);
        }
    };

    const toggleSuit = (value: string) => {
        if (card1 === card2) {
            return;
        }
        if (suit === value) {
            setSuit(undefined);
            setSelectedHand(undefined);
        } else {
            setSuit(value);
        }
    };

    return (
        <Container justify="center" margin={[0, 0, 0, 6]}>
            <SpacedColumn span={0} margin={[0, 2, 0, 0]}>
                {cards.map((card: string) => (
                    <Cell
                        key={card}
                        isSelected={card1 === card}
                        onClick={() => toggleCard1(card)}
                        background={'primary'}
                        selectedBackground="selected"
                    >
                        {card}
                    </Cell>
                ))}
            </SpacedColumn>
            <SpacedColumn span={0} margin={[0, 6, 0, 0]}>
                {cards.map((card: string) => (
                    <Cell
                        key={card}
                        isSelected={card2 === card}
                        onClick={() => toggleCard2(card)}
                        background={'primary'}
                        selectedBackground="selected"
                    >
                        {card}
                    </Cell>
                ))}
            </SpacedColumn>
            <SpacedColumn span={0} justify="center">
                <SuitOval
                    isSelected={suit === 's'}
                    onClick={() => toggleSuit('s')}
                    background={'primary'}
                    selectedBackground="selected"
                >
                    Suited
                </SuitOval>
                <SuitOval
                    isSelected={suit === 'o'}
                    onClick={() => toggleSuit('o')}
                    background={'primary'}
                    selectedBackground="selected"
                >
                    Offsuit
                </SuitOval>
            </SpacedColumn>
        </Container>
    );
};

export default InlinePicker;
