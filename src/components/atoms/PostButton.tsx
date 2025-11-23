export default function PostButton({
    onClick,
    mode,
    ...props
}: {
    onClick: React.HTMLAttributes<HTMLButtonElement>["onClick"];
    mode: "orange" | "blue";
} & React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="w-full px-[16px] py-[12px] rounded-[8px] text-[18px]"
            {...props}
            onClick={onClick}
            style={{
                backgroundColor:
                    mode === "orange"
                        ? "var(--color-text-button-accent-orange-default)"
                        : "var(--color-text-button-accent-blue-default)",
            }}
        >
            <p className="font-semibold text-white" children="작성하기" />
        </button>
    );
}
