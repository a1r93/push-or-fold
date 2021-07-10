const strengthOrder = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

export const isPairedHandsInRange = (hand: string, compareTo: string) => {
    const [card1, card2] = hand.split('');
    const [compCard1, compCard2] = compareTo.split('');

    if (card1 !== card2 || compCard1 !== compCard2) {
        return false;
    }

    const strengthInitial = strengthOrder.findIndex((value: string) => value === card1);
    const strengthComp = strengthOrder.findIndex((value: string) => value === compCard1);

    return strengthInitial <= strengthComp;
};

export const compareExactHand = (hand: string, compareTo: string) => {
    const plusRegex = /.*\+/;

    // If it is not an exact hand we should not compare it in this function
    if (plusRegex.test(compareTo)) {
        return false;
    }

    return hand === compareTo;
};

export const getIsHandInCompareRange = (hand: string, compareTo: string) => {
    const plusRegex = /.*\+/;

    // If it is an exact hand we should not compare it in this function
    if (!plusRegex.test(compareTo)) {
        return false;
    }
    const [card1, card2, suit] = hand.split('');
    const [compCard1, compCard2, compSuit] = compareTo.split('');

    if (card1 !== compCard1) {
        if (compCard2.toLocaleLowerCase() === 'x') {
            const card1Strength = strengthOrder.findIndex((value: string) => value === card1);
            const card1CompStrength = strengthOrder.findIndex((value: string) => value === compCard1);

            return card1Strength <= card1CompStrength;
        }
        return false;
    }

    if (compCard2.toLocaleLowerCase() === 'x') {
        return true;
    }

    if (suit !== compSuit) {
        return false;
    }

    const card2Strength = strengthOrder.findIndex((value: string) => value === card2);
    const card2CompStrength = strengthOrder.findIndex((value: string) => value === compCard2);

    return card2Strength <= card2CompStrength;
};

export const compareHand = (hand: string, compareTo: string) =>
    compareExactHand(hand, compareTo) ||
    isPairedHandsInRange(hand, compareTo) ||
    getIsHandInCompareRange(hand, compareTo);
