import { createContext } from "react";

export enum Theme {
    LIGHT = 'app_theme_light',
    DARK = 'app_theme_dark',
}

export type ThemeContextProps = {
    theme?: Theme,
    setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'current_theme';

export const ThemeContext = createContext<ThemeContextProps>({});