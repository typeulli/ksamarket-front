import { ItemInfo } from "@/utils/data"

export default function ItemContainer(
    {info, completeText, stateClassname, ...props}: {
        info: ItemInfo, completeText: string, stateClassname: string,
    } & React.HTMLAttributes<HTMLDivElement>
) {
    return <div {...props} className="w-full px-[8px] py-[8px] flex">
        <div className="relative w-[96px] h-[96px]">
            <img src={info.src} className="w-full h-full rounded-[8px] object-fill" alt="Item Image" />
            {info.state && <div className="absolute inset-0 rounded-[8px]" style={{ backgroundColor: "rgba(0,0,0,0.75)" }} aria-hidden="true" />}
            {info.state && <p className="absolute inset-0 m-auto w-max h-max text-white text-[16px] font-semibold" children={completeText} />}
        </div>
        <div className="grow  px-[16px] py-[12px] flex gap-[12px]">
            <div className="grow flex flex-col justify-left gap-[8px]">
                <p className="w-full text-[16px] font-semibold">{info.title}</p>
                <p className="w-full flex items-start gap-[4px]">
                    <span className="text-[12px] font-normal text-text-secondary">{info.user}</span>
                    <span className="text-[12px] font-normal text-text-muted">·</span>
                    <span className="text-[12px] font-normal text-text-muted">{info.date.toString()}</span>
                </p>
                <p className={"w-full text-[18px] font-extrabold" + (stateClassname ? (" " + stateClassname) : "")}>{info.state? completeText : info.info}</p>

            </div>
        </div>
    </div>
}