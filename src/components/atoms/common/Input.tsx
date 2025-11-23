import * as Lucide from "lucide-react";
import X from "../icons/X";

export default function Input(
    {value, onChange, onClear, placeholder, type="text", ...props}: {
        value: string, onChange: React.ChangeEventHandler<HTMLInputElement>, onClear?: () => void, placeholder?: string, type?: string
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div className={`w-full p-[12px] rounded-[8px] bg-background-base flex gap-[10px] items-center ${props.className || ''}`}>
        <input className="grow outline-none text-[16px] font-medium"
            style={{color: value.length > 0 ? "black" : "var(--color-text-input-placeholder)"}}
            value={value} onChange={onChange} placeholder={placeholder} type={type}/>
        {value.length > 0 && <button children={<X/>} onClick={onClear} />}
        {props.children}
    </div>
}