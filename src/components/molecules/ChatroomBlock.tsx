export default function ChatroomBlock(
    {type, title, subtitle, recent, imageUrl, ...props}: {
        type: "중고거래" | "분실물",
        title: string,
        subtitle: string,
        recent: string,
        imageUrl?: string
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "title">
) {
    return <div {...props} className={`w-full  px-[12px] py-[8px] flex gap-[10px] items-center ${props.className || ''}`}>
        {imageUrl == null ? <div className="w-[48px] h-[48px] rounded-full bg-sky-400" /> : <img src={imageUrl} alt="Profile" className="w-[48px] h-[48px] rounded-full object-cover" />}
        <div className="grow flex justify-center gap-[10px]">
            <div className="grow h-full flex flex-col justify-center gap-[8px]">
                <p className=" text-[16px] font-medium text-black">{title}</p>
                <p className=" text-[14px] font-normal text-text-secondary">{subtitle}</p>
            </div>
            <div className="h-full flex flex-col items-end gap-[4px]">
                <p className="text-[12px] font-medium text-text-muted">{recent}</p>
                <p className="h-[16px] rounded-[2px] border-[1px] px-[4px] py-[2px] text-[10px] font-bold flex items-center justify-center"
                    style={{
                        color: type === "중고거래" ? "var(--color-text-button-accent-orange-default)" : "var(--color-text-button-accent-blue-default)",
                        borderColor: type === "중고거래" ? "var(--color-border-button-accent-orange-default)" : "var(--color-border-button-blue-orange-default)",}}
                >{type}</p>
            </div>
        </div>       
    </div>
}