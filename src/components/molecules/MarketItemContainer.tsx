import { ItemInfo, MarketItemInfo } from "@/utils/data";
import * as Lucide from "lucide-react";
import ItemContainer from "./utils/ItemContainer";

export default function MarketItemContainer(
    {info, onClick, ...props}: {info: MarketItemInfo, onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"]} & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">
) {
    return <ItemContainer info={info} completeText="판매 완료" stateClassname="text-text-button-accent-orange-default" buttonElement={<button onClick={onClick} children={<Lucide.Heart width={16} color={info.liked? "#F54900": "#737373"} fill={info.liked? "#F54900": "white"} />} />} {...props} />;
}