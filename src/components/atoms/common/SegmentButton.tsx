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
    className="flex flex-row items-center justify-center gap-[8px]"
    {...props}
    >
        {selection.map((item, index) => (
            <button
                key={index}
                className={`px-[12px] py-[6px] rounded-[8px] flex items-center justify-center bg-white`}
                style={{
                    borderColor: selected === index ? colormap_border[item.color] : "var(--color-border-button-default)",
                    borderWidth: selected === index ? "2px" : "1px",
                }}
                onClick={() => onSelectItem(index)}
            >
                <p className="text-[14px]" style={{ color: selected === index ? colormap_text[item.color] : "var(--color-text-button-default)", fontWeight: selected === index ? 700 : 500 }}>{item.text}</p>
            </button>
        ))}
    </div>;
}