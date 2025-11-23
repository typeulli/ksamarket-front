"use client";
import { AuthLink } from "@/components/atoms/AuthButton";
import GlobalSegmentButton, {
    useGlobalSegmentOptions,
} from "@/components/atoms/GlobalSegmentButton";
import ImageUploadButton from "@/components/atoms/ImageUploadButton";
import PostButton from "@/components/atoms/PostButton";
import PostTypeButton from "@/components/atoms/PostTypeButton";
import TitleText from "@/components/atoms/TitleText";
import LabeledInputBox from "@/components/molecules/LabeledInputBox";
import LabeledSegmentBox from "@/components/molecules/LabeledSegmentBox";
import LostItemContainer from "@/components/molecules/LostItemContainer";
import MarketItemContainer from "@/components/molecules/MarketItemContainer";
import SearchBox from "@/components/molecules/SearchBox";
import SearchHistoryBlock from "@/components/molecules/SearchHistoryBlock";
import TextareaBox from "@/components/molecules/TextareaBox";
import GlobalNavigationbar, {
    NavPage,
    useNavState,
} from "@/components/others/GlobalNavigationbar";
import HomeHeader from "@/components/others/HomeHeader";
import SectionHeader from "@/components/others/SectionHeader";
import { ItemInfo } from "@/utils/data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const [globalSelection, setGlobalSelection] = useGlobalSegmentOptions();
    const [nav, setNav] = useNavState(NavPage.Add);
    const [preview, setPreview] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [pricing, setPricing] = useState<string>("5000");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<File>();

    const router = useRouter();

    useEffect(() => {}, []);

    const handlePost = async () => {
        if (
            preview === "" ||
            image === undefined ||
            name === "" ||
            pricing === "" ||
            description === ""
        ) {
            throw new Error("Field must be filled.");
        }

        const formData = new FormData();
        formData.append("file", image);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/items/market`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        name: name,
                        pricing: Number.parseInt(pricing),
                        description: description,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to POST");
            }

            const data = await response.json();
            const item_id = data.id;
            console.log("POSTED successful:", response.status);
            try {
                const response: any = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/uploads/items/${item_id}/images`,
                    {
                        method: "POST",
                        headers: {},
                        credentials: "include",
                        body: formData,
                    }
                );

                if (!response.ok) {
                    console.error("Failed to UPLOAD IMAGE");
                }

                const data = await response;
                console.log("UPLOADED successful:", data.status);

                router.push("/app/home");
            } catch (error) {
                console.error("Error during login:", error);
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <>
            <SectionHeader
                title="새 글 작성"
                onExit={() => {
                    router.back();
                }}
            />
            <main className="flex flex-col p-[24px] gap-[16px] justify-start items-center h-full w-full">
                <div className="overflow-y-scroll h-full w-full gap-[16px] flex flex-col items-center">
                    <div className="flex gap-4">
                        <ImageUploadButton
                            onFileSelect={(file: File) => {
                                console.log("업로드된 파일:", file);
                                setPreview(URL.createObjectURL(file));
                                setImage(file);
                            }}
                        />
                        {preview && (
                            <img
                                src={preview}
                                className="w-[200px] h-[200px] object-cover rounded"
                            />
                        )}
                    </div>
                    <LabeledSegmentBox
                        text="글 종류"
                        value={globalSelection}
                        onChange={setGlobalSelection}
                    />
                    <LabeledInputBox
                        label="판매할 물건"
                        type="text"
                        placeholder="판매할 물건의 이름을 입력하세요"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <LabeledInputBox
                        label="희망 거래 금액"
                        type="number"
                        placeholder="판매할 물건의 이름을 입력하세요"
                        value={pricing}
                        onChange={(e) => setPricing(e.target.value)}
                    />
                    <TextareaBox
                        label="설명"
                        placeholder="판매할 물건에 대한 설명을 입력하세요"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <PostButton onClick={handlePost} mode="orange" />
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
function or(arg0: boolean) {
    throw new Error("Function not implemented.");
}
