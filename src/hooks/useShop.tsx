import { useShop } from "../context/ShopContext";

export const useShopHook = () => {
    const { shop, isLoading, getShopService, updateShopService } = useShop()

    return { shop, isLoading, getShopService, updateShopService }
}