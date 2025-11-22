import { useState } from "react";
import SegmentButton from "./utils/SegmentButton";

export type GlobalSegmentOption = "중고거래" | "분실물";

export function useGlobalSegmentOptions(value: GlobalSegmentOption = "중고거래"): [option: GlobalSegmentOption, setOption: (option: GlobalSegmentOption) => void] {
    return useState<GlobalSegmentOption>(value);
}

export default function GlobalSegmentButton(
    {value, onChange, ...props}: {value: GlobalSegmentOption, onChange: (option: GlobalSegmentOption) => void} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    const options: GlobalSegmentOption[] = ["중고거래", "분실물"];
    return <SegmentButton
        selection={[
            {text: "중고거래", color: "orange"},
            {text: "분실물", color: "blue"},
        ]}
        selected={options.indexOf(value)}
        onSelectItem={(index) => {
            onChange(options[index]);
        }}
        {...props}
    />;
}