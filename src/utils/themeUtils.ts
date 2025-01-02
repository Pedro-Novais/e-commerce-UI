import { ColorType } from "../types/ShopTypes"; 

export const setThemeColors = (newColors: ColorType): void => {
    for (const [key, value] of Object.entries(newColors)) {
        document.documentElement.style.setProperty(`--${key}`, value);
    }
};
