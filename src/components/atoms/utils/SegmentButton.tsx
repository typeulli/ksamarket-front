export default function SegmentButton({
    selection, selected, onSelectItem, ...props
}: {selection: { text: string, color: "orange" | "blue" | "black" }[], selected: number, onSelectItem: (index: number) => void} & React.HTMLAttributes<HTMLDivElement>) {
    const colormap_border: {[key: string]: string} = {
        "orange": "var(--color-border-button-accent-orange-default)",
        "blue": "var(--color-border-button-accent-blue-default)",
        "black": "black",
    };
    const colormap_text: {[key: string]: string} = {
        "orange": "var(--color-text-button-accent-orange-default)",
        "blue": "var(--color-text-button-accent-blue-default)",
        "black": "black",
    };
    return <div
    className="h-[33px] flex flex-row items-center justify-center gap-[8px]"
    {...props}
    >
        {selection.map((item, index) => (
            <button
                key={index}
                className={`h-[33px] px-[12px] py-[8px] rounded-[8px] border-[2px] flex items-center justify-center bg-white`}
                style={{
                    borderColor: selected === index ? colormap_border[item.color] : "var(--color-border-button-default)",
                }}
                onClick={() => onSelectItem(index)}
            >
                <p className="font-semibold text-[14px]" style={{ color: selected === index ? colormap_text[item.color] : "var(--color-text-button-default)" }}>{item.text}</p>
            </button>
        ))}
    </div>;
}