import Input from "../atoms/utils/Input";

export default function InputBox(
    {label, value, onChange, onClear, ...props}: {label: string, value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, onClear?: () => void} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div {...props} className={`w-[364px] min-h-[64px] flex flex-col gap-[4px] ${props.className || ''}`}>
        <p className="w-full h-[17px] text-[14px] text-black font-medium">{label}</p>
        <Input value={value} onChange={onChange} onClear={onClear} placeholder="내용을 입력하세요." />
    </div>;
}