import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import { getShopService, updateShopService } from "../service/ShopService";
import { setThemeColors } from "../utils/themeUtils";  

type ColorType = {
    backgroundColor: string;
    fontColor: string;
    headerColor: string;
    footerColor: string;
};

type Shop = {
    id: string;
    color: object;
};

type ShopContextType = {
    shop: Shop | undefined;
    isLoading: boolean;
    error: string | null;
    getShopService: () => Promise<void>;
    updateShopService: (data: any) => Promise<void>;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopProviderProps {
    children: ReactNode;
}

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
    const [shop, setShop] = useState<Shop | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchGetShop = async () => {
        setIsLoading(true);
        try {
            
            const data = await getShopService();
            setShop(data);

            const defaultColors: ColorType = {
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
            await updateShopService(data);
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
