import { ItemInfo } from "@/utils/data"

export default function ItemContainer(
    {info, completeText, stateClassname, buttonElement, ...props}: {
        info: ItemInfo, completeText: string, stateClassname: string, buttonElement: React.ReactNode
    } & React.HTMLAttributes<HTMLDivElement>
) {
    return <div {...props} className="w-[364px] min-h-[112px] px-[20px] py-[8px] flex">
        <div className="relative w-[96px] h-[96px]">
            <img src={info.src} className="w-full h-full rounded-[8px] object-cover" alt="Item Image" />
            {info.state && <div className="absolute inset-0 rounded-[8px]" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} aria-hidden="true" />}
            {info.state && <p className="absolute inset-0 m-auto w-max h-max text-white text-[16px] font-semibold" children={completeText} />}
        </div>
        <div className="grow min-h-[94px] px-[16px] py-[12px] flex gap-[12px]">
            <div className="grow min-h-[70px] flex flex-col justify-left gap-[8px]">
                <p className="w-full h-[19px] text-[16px] font-semibold">{info.title}</p>
                <p className="w-full h-[14px] flex items-start gap-[4px]">
                    <span className="text-[12px] font-normal text-text-secondary">{info.user}</span>
                    <span className="text-[12px] font-normal text-text-muted">·</span>
                    <span className="text-[12px] font-normal text-text-muted">{info.date.toLocaleDateString()}</span>
                </p>
                <p className={"w-full h-[21px] text-[18px] font-extrabold" + (stateClassname ? (" " + stateClassname) : "")}>{info.state? completeText : info.info}</p>

            </div>
        <div className="min-w-[16px] h-full flex flex-col items-start">
            {buttonElement}
        </div>
        </div>
    </div>
}