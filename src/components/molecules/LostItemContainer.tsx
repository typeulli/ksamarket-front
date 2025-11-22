import { ItemInfo } from "@/utils/data";
import * as Lucide from "lucide-react";
import ItemContainer from "./utils/ItemContainer";

export default function LostItemContainer(
    {info, onClick, ...props}: {info: ItemInfo, onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"]} & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">
) {
    return <ItemContainer info={info} completeText="수거 완료" stateClassname="text-text-button-accent-blue-default" buttonElement={<button onClick={onClick} children={<Lucide.EllipsisVertical width={16} color="#737373" />} />} {...props} />;
}