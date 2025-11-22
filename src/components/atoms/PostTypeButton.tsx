import * as Lucide from "lucide-react";

export default function PostTypeButton(
    {mode, ...props}: {mode: "중고거래" | "분실물"} & React.HTMLAttributes<HTMLButtonElement>
) {
    const Icon = mode === "중고거래" ? Lucide.Store : Lucide.Archive;
    return <button
        className="w-[150px] h-[200px] rounded-[8px] border-[2px] flex flex-col items-center justify-center gap-[10px]"
        {...props}
        style={{
            borderColor: mode === "중고거래" ? "var(--color-border-button-accent-orange-default)" : "var(--color-border-button-accent-blue-default)",
        }}
    >
        <Icon color={mode === "중고거래" ? "var(--color-text-button-accent-orange-default)" : "var(--color-text-button-accent-blue-default)"} />
        <p 
            className="h-[21px] font-semibold text-[18px] flex items-center justify-center"
            style={{
                color: mode === "중고거래" ? "var(--color-text-button-accent-orange-default)" : "var(--color-text-button-accent-blue-default)"
            }} children={mode} 
        />
    </button>;
}