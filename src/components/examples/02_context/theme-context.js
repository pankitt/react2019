import { createContext } from 'react';

export const themes = {
    light: {
        background: '#eee',
        color: '#000'
    },
    dark: {
        background: '#222',
        color: '#fff'
    },
};

export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});