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
    const [marketItems, setMarketItems] = useState<ItemInfo[]>([]);
    const [lostItems, setLostItems] = useState<ItemInfo[]>([]);
    const [nav, setNav] = useNavState(NavPage.WishList);
    const [search, setSearch] = useState<string>("");

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/items/market`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();

                setMarketItems(
                    result.map((item: any) => ({
                        title: item.name,
                        user: item.seller_id,
                        date: item.created_at,
                        info: item.pricing,
                        state: false,
                    }))
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/items/lost`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();
                setLostItems([
                    {
                        title: result[0].name,
                        user: result[0].seller_id,
                        date: result[0].created_at,
                        info: result[0].location,
                        state: false,
                    },
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <main className="flex flex-col p-[24px] gap-[16px] justify-center items-center h-full w-full">
                <TitleText text="구현중" />
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
