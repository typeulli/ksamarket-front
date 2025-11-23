"use client"
import ChatroomHeader from "@/components/others/ChatroomHeader";
import GlobalNavigationbar, { useNavState } from "@/components/others/GlobalNavigationbar";
import HomeHeader from "@/components/others/HomeHeader";
import MessageHeader from "@/components/others/MessageHeader";
import WarningModal from "@/components/others/WarningModal";
import { useState } from "react";

export default function Home() {
    const [nav, setNav] = useNavState();
    const [warningBlueOpen, setWarningBlueOpen] = useState(false);
    const [warningOrangeOpen, setWarningOrangeOpen] = useState(false);
    return <div className="flex flex-col gap-[12px] p-6">
        <GlobalNavigationbar value={nav} onSelect={setNav} />
        <button onClick={() => setWarningBlueOpen(true)} children="경고 모달 열기 (blue)" />
        <WarningModal open={warningBlueOpen} onClose={() => setWarningBlueOpen(false)} mode="blue" />
        <button onClick={() => setWarningOrangeOpen(true)} children="경고 모달 열기 (orange)" />
        <WarningModal open={warningOrangeOpen} onClose={() => setWarningOrangeOpen(false)} mode="orange" />
        <ChatroomHeader title="채팅방 제목" onExit={() => alert("나가기 클릭됨")} onMenu={() => alert("메뉴 클릭됨")} onSearch={() => alert("검색 클릭됨")} />
        <MessageHeader title="메시지함 제목" onExit={() => alert("나가기 클릭됨")} />
        <HomeHeader onSend={() => alert("전송 클릭됨")} />
    </div>
}