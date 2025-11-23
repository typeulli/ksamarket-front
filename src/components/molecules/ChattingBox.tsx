import * as Lucide from "lucide-react";
import SendButton, { SendButtonMode } from "../atoms/common/SendButton";

export default function ChattingBox(
    {mode, value, onChange, ...props}: {mode: Exclude<SendButtonMode, "disabled">, value: string, onChange: React.ChangeEventHandler<HTMLInputElement>} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div {...props} className={`w-full p-[6px] flex gap-[4px] rounded-full bg-background-base ${props.className || ''}`}>
        <button className="w-[40px] h-[40px] bg-transparent rounded-full flex items-center justify-center" children={<Lucide.Plus width={16} />} />
        <input className="grow outline-none py-[8px] text-[16px] font-medium bg-transparent"
            style={{color: value.length > 0 ? "black" : "var(--color-text-input-placeholder)"}}
             value={value} onChange={onChange} placeholder="메시지를 입력하세요." />
        <SendButton mode={value.length > 0 ? mode : "disabled"} />
    </div>;
}