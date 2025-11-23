import Input from "../atoms/common/Input";

export default function LabeledInputBox(
    {label, placeholder, value, onChange, onClear, type="text", ...props}: {label: string, type?:string, placeholder:string, value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, onClear?: () => void} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div className={`w-full flex flex-col gap-[4px] ${props.className || ''}`}>
        <p className="w-full text-[14px] text-black font-medium">{label}</p>
        <Input value={value} onChange={onChange} onClear={onClear} placeholder={placeholder} type={type}>{props.children}</Input>
    </div>;}