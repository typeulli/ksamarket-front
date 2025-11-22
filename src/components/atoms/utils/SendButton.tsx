import * as Lucide from "lucide-react";

export type SendButtonMode = "orange" | "blue" | "disabled";

export default function SendButton(
    {mode, ...props}: {mode: SendButtonMode} & React.HTMLAttributes<HTMLButtonElement>
) {
    return <button
        className={"w-[40px] h-[40px] px-[13px] rounded-full flex items-center justify-center " + (mode === "orange" ? "bg-background-accent-orange" : mode === "blue" ? "bg-background-accent-blue" : "bg-slate-300")}
        disabled={mode === "disabled"}
        {...props}
    >
        <Lucide.SendHorizontal color="white" />
    </button>
}