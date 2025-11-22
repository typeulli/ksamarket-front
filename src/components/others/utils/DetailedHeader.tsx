import * as Lucide from "lucide-react";
import React from "react";
export default function DetailedHeader(
    {title, onExit, ...props}: {title: string, onExit: React.MouseEventHandler<HTMLButtonElement>} & React.HTMLAttributes<HTMLDivElement>
) {
    return <div {...props} className="w-[412px] min-h-[72px] p-[24px] flex gap-[12px]">
        <button onClick={onExit} children={<Lucide.ArrowLeft width={20} height={20} />} />
        <p className="grow min-h-[24px] text-[20px] font-semibold text-black" children={title} />
        {props.children}
    </div>
}