interface IColors {
    background: string;
    red: string;
    orange: string;
    blue: string;
    pink: string;
    green: string;
}

export type Color = keyof IColors;

export default {
    background: '#8cc0b0',
    red: '#e27d60',
    orange: '#e8a87c',
    blue: '#95cbc8',
    pink: '#c38d9e',
    green: '#41b3a3',
} as IColors;
