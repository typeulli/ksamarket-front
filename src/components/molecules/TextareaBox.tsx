export default function TextareaBox(
    {label, text, onChange, ...props}: {label: string, text: string, onChange: React.ChangeEventHandler<HTMLTextAreaElement>} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div {...props} className={`w-full ${props.className || ''}`}>
        <p className="w-full mb-[4px] text-[14px] text-black font-medium">{label}</p>
        <textarea
            className="w-full p-[12px] rounded-[8px] font-medium bg-background-base outline-none text-[16px]"
            style={{color: text.length > 0 ? "black" : "var(--color-text-muted)"}}
            value={text}
            onChange={onChange}
            placeholder="내용을 입력하세요."
        />
    </div>;
}