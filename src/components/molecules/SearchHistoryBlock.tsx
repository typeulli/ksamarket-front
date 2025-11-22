import * as Lucide from "lucide-react";
export default function SearchHistoryBlock(
    {left, text, onDelete, ...props}: {left: string, text: string, onDelete: React.MouseEventHandler<HTMLButtonElement>} & React.HTMLAttributes<HTMLDivElement>
) {
    return <div {...props} className={`w-[364px] min-h-[33px] flex justify-between p-[8px] gap-[16px] ${props.className || ''}`}>
        <p className="h-[17px] text-[14px] font-normal text-text-button-default" children={left} />
        <p className="grow h-[17px] flex items-left text-[14px] font-normal text-text-secondary" children={text} />
        <button
            onClick={onDelete}
            children={<Lucide.X width={16} fill="#737373" />}
        />
    </div>;
}