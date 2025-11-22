import * as Lucide from "lucide-react";
import { useState } from "react";
function NavBtn({Icon, selected, onClick}: {
    Icon: React.ForwardRefExoticComponent<Omit<Lucide.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>, selected: boolean, 
    onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"]}
) {
    return <button onClick={onClick} children={<Icon width={24} height={24} color={selected ? "#000000" : "#a1a1a1"} />} />;
}
export enum NavPage {
    None = "none",
    Home = "home",
    Search = "search",
    Add = "add",
    WishList = "wishlist",
    Menu = "menu"
}
export function useNavState(initial: NavPage = NavPage.None) {
    return useState<NavPage>(initial);
}
export default function GlobalNavigationbar({value, onSelect}: {value: NavPage, onSelect: (page: NavPage) => void}) {
    return <div className="w-[412px] min-h-[72px] px-[32px] py-[24px] flex justify-between">
        <NavBtn Icon={Lucide.House} selected={value === NavPage.Home} onClick={() => onSelect(NavPage.Home)} />
        <NavBtn Icon={Lucide.Search} selected={value === NavPage.Search} onClick={() => onSelect(NavPage.Search)} />
        <NavBtn Icon={Lucide.PlusCircle} selected={value === NavPage.Add} onClick={() => onSelect(NavPage.Add)} />
        <NavBtn Icon={Lucide.Heart} selected={value === NavPage.WishList} onClick={() => onSelect(NavPage.WishList)} />
        <NavBtn Icon={Lucide.Menu} selected={value === NavPage.Menu} onClick={() => onSelect(NavPage.Menu)} />
    </div>; 
}