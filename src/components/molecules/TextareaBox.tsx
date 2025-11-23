export default function TextareaBox({
    label,
    value,
    placeholder,
    onChange,
    ...props
}: {
    label: string;
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">) {
    return (
        <div {...props} className={`w-full h-full ${props.className || ""}`}>
            <p className="w-full mb-[4px] text-[16px] text-black font-semibold">
                {label}
            </p>
            <textarea
                className="w-full h-full p-[12px] rounded-[8px] font-medium bg-background-base outline-none text-[16px]"
                style={{
                    color:
                        value.length > 0 ? "black" : "var(--color-text-muted)",
                }}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
