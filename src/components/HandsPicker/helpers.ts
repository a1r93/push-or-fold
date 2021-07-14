export const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

export const formatGridHands = (letter1: string, letter2: string) => {
    if (letter1 === letter2) {
        return `${letter1}${letter2}`;
    }

    const letter1Idx = cards.findIndex((current: string) => current === letter1);
    const letter2Idx = cards.findIndex((current: string) => current === letter2);

    return letter1Idx > letter2Idx ? `${letter2}${letter1}o` : `${letter1}${letter2}s`;
};
