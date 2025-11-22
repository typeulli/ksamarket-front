import { useState } from "react";
import SegmentButton from "./utils/SegmentButton";

type ChatroomSegmentButtonOption = "전체" | "판매" | "구매" | "분실물" | "아직 읽지 않음";

export function useChatroomSegmentButton(value: ChatroomSegmentButtonOption = "전체"): [option: ChatroomSegmentButtonOption, setOption: (option: ChatroomSegmentButtonOption) => void] {
    return useState<ChatroomSegmentButtonOption>(value);
}

export default function ChatroomSegmentButton(
    {value, onChange, ...props}: {value: ChatroomSegmentButtonOption, onChange: (option: ChatroomSegmentButtonOption) => void} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    const options: ChatroomSegmentButtonOption[] = ["전체", "판매", "구매", "분실물", "아직 읽지 않음"];
    return <SegmentButton
        selection={[
            {text: "전체", color: "orange"},
            {text: "판매", color: "orange"},
            {text: "구매", color: "orange"},
            {text: "분실물", color: "blue"},
            {text: "아직 읽지 않음", color: "black"},
        ]}
        selected={options.indexOf(value)}
        onSelectItem={(index) => {
            onChange(options[index]);
        }}
        {...props}
    />;
}