export type ItemInfo = {
    title: string;
    user: string;
    date: Date;
    info: string;
    state: boolean;
    src?: string;
}

export type MarketItemInfo = ItemInfo & {
    liked: boolean;
}