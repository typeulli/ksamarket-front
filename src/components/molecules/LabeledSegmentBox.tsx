import GlobalSegmentButton, { GlobalSegmentOption } from "../atoms/GlobalSegmentButton";

export default function LabeledSegmentBox(
    {text, value, onChange, ...props}: {text: string, value: GlobalSegmentOption, onChange: (value: GlobalSegmentOption) => void} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div {...props} className={`w-full flex items-center justify-between`+(props.className ? ` ${props.className}` : '')}>
        <p className="text-[14px] font-normal text-black" children={text} />
        <GlobalSegmentButton value={value} onChange={onChange} />
    </div>;
}