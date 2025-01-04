import { ColorShopType } from "../types/ShopTypes"; 

export const setThemeColors = (newColors: ColorShopType): void => {
    for (const [key, value] of Object.entries(newColors)) {
        document.documentElement.style.setProperty(`--${key}`, value);
    }
};
