import { ItemInfo} from "@/utils/data";
import * as Lucide from "lucide-react";
import ItemContainer from "./common/ItemContainer";

export default function MarketItemContainer(
    {info, onClick, ...props}: {info: ItemInfo, onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"]} & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">
) {
    return <ItemContainer info={info} completeText="판매 완료" stateClassname="text-text-button-accent-orange-default" {...props} />;
}