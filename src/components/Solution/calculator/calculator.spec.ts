import { compareExactHand, getIsHandInCompareRange, isPairedHandsInRange } from './calculator';

describe('Testing the hand calculator', () => {
    describe('Testing paired hands', () => {
        it('If the none of the hands are paired it should return false', () => {
            const result = isPairedHandsInRange('KQs', 'AKo');
            expect(result).toBe(false);
        });

        it('If one of the hands are paired but not the other it should return false', () => {
            const result = isPairedHandsInRange('KK', 'AKo');
            expect(result).toBe(false);
        });

        it('If the other hand are paired but not the other it should return false', () => {
            const result = isPairedHandsInRange('KQs', 'KK');
            expect(result).toBe(false);
        });

        it('If both hands are paired but the it is lower than the range it should return false', () => {
            const result = isPairedHandsInRange('44', 'QQ');
            expect(result).toBe(false);
        });

        it('If both hands are paired and they are the same it should return true', () => {
            const result = isPairedHandsInRange('44', '44');
            expect(result).toBe(true);
        });

        it('If both hands are paired and the asked hand is inside the range', () => {
            const result = isPairedHandsInRange('88', '44+');
            expect(result).toBe(true);
        });
    });

    describe('Testing exact hand function', () => {
        it('If it is not an exact hand, it should return false', () => {
            const result = compareExactHand('A4s', 'A4s+');
            expect(result).toBe(false);
        });

        it('If it is an exact hand and they are not the same, it should return false', () => {
            const result = compareExactHand('KQo', 'A5s');
            expect(result).toBe(false);
        });

        it('If it is an exact hand and they are the same, it should return true', () => {
            const result = compareExactHand('KQo', 'KQo');
            expect(result).toBe(true);
        });
    });

    describe('Testing ranged hand function', () => {
        it('If the compared hand is an exact hand we should not test it in this function', () => {
            const result = getIsHandInCompareRange('A4s', 'A4s');
            expect(result).toBe(false);
        });

        it('If the first card is not the same as the first card of the compare to, it should return false', () => {
            const result = getIsHandInCompareRange('KQo', 'A4s+');
            expect(result).toBe(false);
        });

        it('If second card of the comparator is an x sign and the first cards are the same, it should return true', () => {
            const result = getIsHandInCompareRange('A2o', 'Ax+');
            expect(result).toBe(true);
        });

        it('If second card of the comparator is an x sign and the first card is lower than the second one, it should return false', () => {
            const result = getIsHandInCompareRange('62o', 'Kx+');
            expect(result).toBe(false);
        });

        it('If the suit of the cards are not the same, if should return false', () => {
            const result = getIsHandInCompareRange('A2o', 'A2s+');
            expect(result).toBe(false);
        });

        it('If the starting hand of the range is the exact same hand as the hand we compare, it should return true', () => {
            const result = getIsHandInCompareRange('J9s', 'J9s+');
            expect(result).toBe(true);
        });

        it('If the hand is outside the comparing range, it should return false', () => {
            const result = getIsHandInCompareRange('J7s', 'J9s+');
            expect(result).toBe(false);
        });

        it('If the hand is inside the comparing range, it should return false', () => {
            const result = getIsHandInCompareRange('KQs', 'KTs+');
            expect(result).toBe(true);
        });

        it('everything above Tx should be true if the comparator is Tx+', () => {
            const result = getIsHandInCompareRange('KQs', 'Tx+');
            expect(result).toBe(true);
        });
    });
});
