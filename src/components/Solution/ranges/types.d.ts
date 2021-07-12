export interface IRange {
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

export interface IRanges {
    ante10: IRange;
    ante12: IRange;
}
export type TAnte = keyof IRanges;
