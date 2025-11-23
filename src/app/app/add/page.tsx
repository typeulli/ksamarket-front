"use client";
import { AuthLink } from "@/components/atoms/AuthButton";
import GlobalSegmentButton, {
    useGlobalSegmentOptions,
} from "@/components/atoms/GlobalSegmentButton";
import PostTypeButton from "@/components/atoms/PostTypeButton";
import TitleText from "@/components/atoms/TitleText";
import LostItemContainer from "@/components/molecules/LostItemContainer";
import MarketItemContainer from "@/components/molecules/MarketItemContainer";
import SearchBox from "@/components/molecules/SearchBox";
import SearchHistoryBlock from "@/components/molecules/SearchHistoryBlock";
import GlobalNavigationbar, {
    NavPage,
    useNavState,
} from "@/components/others/GlobalNavigationbar";
import HomeHeader from "@/components/others/HomeHeader";
import { ItemInfo } from "@/utils/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const [globalSelection, setGlobalSelection] = useGlobalSegmentOptions();
    const [lostItems, setLostItems] = useState<ItemInfo[]>([]);
    const [nav, setNav] = useNavState(NavPage.Add);
    const [search, setSearch] = useState<string>("");

    const router = useRouter();

    const indexProvider: (e: NavPage) => number = (e) =>
        [
            NavPage.Home,
            NavPage.Search,
            NavPage.Add,
            NavPage.WishList,
            NavPage.Menu,
        ].indexOf(e);

    return (
        <>
            <main className="flex flex-col p-[24px] gap-[16px] justify-center items-center h-full w-full">
                <p className="text-[24px] font-semibold">
                    작성할 글 종류를 선택해주세요
                </p>
                <div className="flex gap-[24px]">
                    {" "}
                    <PostTypeButton mode="중고거래" />
                    <PostTypeButton mode="분실물" />
                </div>
            </main>
            <GlobalNavigationbar
                value={nav}
                onSelect={(page) => {
                    router.push("/app/" + page);
                }}
            />
        </>
    );
}
