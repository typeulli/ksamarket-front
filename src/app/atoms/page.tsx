"use client";
import ChatroomSegmentButton, { useChatroomSegmentButton } from "@/components/atoms/ChatroomSegmentButton";
import GlobalSegmentButton, { useGlobalSegmentOptions } from "@/components/atoms/GlobalSegmentButton";
import MutedText from "@/components/atoms/MutedText";
import PostTypeButton from "@/components/atoms/PostTypeButton";
import TitleText from "@/components/atoms/TitleText";
import Input from "@/components/atoms/utils/Input";
import SendButton from "@/components/atoms/utils/SendButton";
import WriteButton from "@/components/atoms/WriteButton";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [globalSelection, setGlobalSelection] = useGlobalSegmentOptions();
  const [chatroomSelection, setChatroomSelection] = useChatroomSegmentButton();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <TitleText text="Welcome to KSA Market!"/>
        <MutedText text="Your one-stop shop for all things KSA."/>
        <WriteButton mode="blue" onClick={() => alert("작성하기 버튼이 클릭되었습니다.")} />
        <WriteButton mode="orange" onClick={() => alert("작성하기 버튼이 클릭되었습니다.22")}/>
        <GlobalSegmentButton value={globalSelection} onChange={setGlobalSelection} />
        <ChatroomSegmentButton value={chatroomSelection} onChange={setChatroomSelection} />
        <PostTypeButton mode="중고거래" onClick={() => alert("중고거래 버튼이 클릭되었습니다.")} />
        <PostTypeButton mode="분실물" onClick={() => alert("분실물 버튼이 클릭되었습니다.")} />
        <SendButton mode="orange" onClick={() => alert("Send 버튼이 클릭되었습니다.")} />
        <SendButton mode="blue" onClick={() => alert("Send 버튼이 클릭되었습니다.")} />
        <SendButton mode="disabled" onClick={() => alert("Send 버튼이 클릭되었습니다.")} />
        <Input value={text} onChange={event => setText(event.currentTarget.value)} onClear={() => setText('')} />
      </main>
    </div>
  );
}
