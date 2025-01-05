export type ColorShopType = {
    backgroundColor: string;
    fontColor: string;
    headerColor: string;
    footerColor: string;
};

export type ShopType = {
    id: string;
    color: object;
    images: ImagesType[]
};

export type ShopContextType = {
    shop: ShopType | undefined;
    isLoading: boolean;
    error: string | null;
    getShopService: () => Promise<void>;
    updateShopService: (data: any) => Promise<void>;
};

type ImagesType = {
    position: string | null;
    url: string;
    link: string | null;
    type: string;
}
