import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import ShopService from "../service/_ShopService";
import { ShopContextType, ShopType, ColorShopType } from "../types/ShopTypes";

import { setThemeColors } from "../utils/themeUtils";

const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopProviderProps {
    children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
    const [shop, setShop] = useState<ShopType | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const shopService = new ShopService()

    const fetchGetShop = async () => {
        setIsLoading(true);
        try {

            const data = await shopService.getShop();
            setShop(data);

            const defaultColors: ColorShopType = {
                backgroundColor: data.color?.backgroundColor ?? "green",
                fontColor: data.color?.fontColor ?? "green",
                headerColor: data.color?.headerColor ?? "green",
                footerColor: data.color?.footerColor ?? "green",
            };

            setThemeColors(defaultColors);

        } catch (err) {
            setError("Erro ao carregar as informações da loja");

        } finally {
            setIsLoading(false);
        }
    };

    const fetchUpdateShop = async (data: any) => {
        try {
            await shopService.updateShop(data);
            setShop(data);
        } catch (err) {
            console.error("Erro ao atualizar a loja:", err);
        }
    };

    useEffect(() => {
        fetchGetShop();
    }, []);

    return (
        <ShopContext.Provider
            value={{
                shop,
                isLoading,
                error,
                getShopService: fetchGetShop,
                updateShopService: fetchUpdateShop,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = (): ShopContextType => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("useShop deve ser usado dentro de um ShopProvider");
    }
    return context;
};
