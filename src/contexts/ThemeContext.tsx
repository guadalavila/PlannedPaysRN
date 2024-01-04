import React, { ReactNode, useState } from 'react';
import { ThemeType } from './types/themeType';
import { colors } from '~utils/colors';
import { typography } from '~utils/typography';

export const ThemeContext = React.createContext<{
    theme: 'dark' | 'light';
    setTheme: React.Dispatch<void>;
    themeApp: ThemeType;
    restoreThemeApp: React.Dispatch<void>;
}>({
    theme: 'dark',
    setTheme: () => {},
    themeApp: { colors: colors.light, typography: typography },
    restoreThemeApp: () => {},
});

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const setThemeApp = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const restoreThemeApp = () => {};

    const themeApp = {
        colors: theme === 'light' ? colors.light : colors.dark,
        typography,
    };

    return (
        <ThemeContext.Provider
            value={{ theme: theme, setTheme: setThemeApp, themeApp: themeApp, restoreThemeApp: restoreThemeApp }}>
            {children}
        </ThemeContext.Provider>
    );
};
