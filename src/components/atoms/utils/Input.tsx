import * as Lucide from "lucide-react";
import X from "../icons/X";

export default function Input(
    {value, onChange, onClear, placeholder, ...props}: {
        value: string, onChange: React.ChangeEventHandler<HTMLInputElement>, onClear?: () => void, placeholder?: string
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div {...props} className={`w-[364px] h-[43px] p-[12px] rounded-[8px] bg-background-base flex gap-[10px] items-center ${props.className || ''}`}>
        <input className="grow h-[19px] outline-none text-[16px] font-medium"
            style={{color: value.length > 0 ? "black" : "var(--color-text-input-placeholder)"}}
            value={value} onChange={onChange} placeholder={placeholder} />
        {value.length > 0 && <button children={<X/>} onClick={onClear} />}
        {props.children}
    </div>
}