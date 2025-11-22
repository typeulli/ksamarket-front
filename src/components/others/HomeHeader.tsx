import * as Lucide from "lucide-react";
import React from "react";
export default function HomeHeader(
    {onSend, ...props}: {onSend: React.MouseEventHandler<HTMLButtonElement>} & React.HTMLAttributes<HTMLDivElement>
) {
    return <div {...props} className="w-[412px] min-h-[72px] p-[24px] flex justify-between">
        <p className="min-h-[21px] text-[18px] font-bold text-black">
            <span className="text-text-button-accent-orange-default">크사</span>
            <span className="text-text-button-accent-blue-default">장터</span>
        </p>
        <button onClick={onSend} children={<Lucide.Send width={20} height={20} />} />
    </div>
}