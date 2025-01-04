import { useShop } from "../context/ShopContext";

export const useShopHook = () => {
    const { shop, getShopService, updateShopService } = useShop()

    return { shop, getShopService, updateShopService }
}