export default function WriteButton(
    {onClick, mode, ...props}: {onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"], mode: "orange" | "blue"} & React.HTMLAttributes<HTMLButtonElement>
) {
    return <button
    className="w-[364px] h-[45px] px-[16px] py-[12px] rounded-[8px]"
    {...props}
    onClick={onClick}
    style={{
        backgroundColor: mode === "orange" ? "var(--color-text-button-accent-orange-default)" : "var(--color-text-button-accent-blue-default)",
    }}><p 
    className="w-[332px] h-[21px] font-medium text-white"
    children="작성하기"
/></button>;
}