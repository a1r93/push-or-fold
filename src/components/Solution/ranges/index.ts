import button3 from './b-3';
import button4 from './b-4';
import button5 from './b-5';
import button6 from './b-6';
import button from './button';
import cutoff from './cutoff';
import hijack from './hijack';
import smallBlind from './smallBlind';

interface IRange {
    SB: string[][];
    BTN: string[][];
    HJ: string[][];
    CO: string[][];
    'B-3': string[][];
    'B-4': string[][];
    'B-5': string[][];
    'B-6': string[][];
}

export type TPosition = keyof IRange;

export default {
    SB: smallBlind,
    BTN: button,
    HJ: hijack,
    CO: cutoff,
    'B-3': button3,
    'B-4': button4,
    'B-5': button5,
    'B-6': button6,
} as IRange;
