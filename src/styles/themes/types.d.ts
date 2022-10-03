export interface IPalette {
    background: string;
    primary: string;
    'primary-variant': string;
    secondary: string;
    tertiary: string;
    selected: string;
    success: string;
    error: string;
    pending: string;
}

export type TPaletteColors = keyof IPalette;

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: IPalette;
        transitionDuration: number;
        radius: number;
        ovalRadius: number;
        spacing: (value: number[]) => string;
    }

    export interface Themes {
        grid: DefaultTheme;
        inline: DefaultTheme;
    }

    export type Theme = keyof Themes;
}
