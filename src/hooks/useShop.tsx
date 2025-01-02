import { useShop } from "../context/ShopContext";

export const useShopHook = () => {
    const { shop, theme, getShopService, updateShopService } = useShop()

    return { shop, theme, getShopService, updateShopService }
}