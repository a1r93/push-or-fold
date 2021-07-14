import { DefaultTheme, Theme, Themes } from 'styled-components';

import grid from './grid';
import inline from './inline';

export const themes: Themes = {
    grid,
    inline,
};

export const persistSelectedTheme = (selectedTheme: Theme) => {
    localStorage.setItem('selected-theme', selectedTheme);
};

export const getThemeName = () => localStorage.getItem('selected-theme') as Theme;

export const getPersistedSelectedTheme = (): DefaultTheme => {
    const key = getThemeName();

    if (!key || !themes[key]) {
        return themes.grid;
    }

    return themes[key];
};
