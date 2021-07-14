import { DefaultTheme } from 'styled-components';

import palette from './palette';

const gridTheme: DefaultTheme = {
    palette,
    transitionDuration: 200,
    radius: 5,
    ovalRadius: 35,
    spacing: (value: number[]) => value.map((current: number) => `${current * 8}px`).join(' '),
};

export default gridTheme;
