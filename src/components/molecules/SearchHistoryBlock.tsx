import * as Lucide from "lucide-react";
export default function SearchHistoryBlock({
    left,
    text,
    onDelete,
    ...props
}: {
    left: string;
    text: string;
    onDelete: React.MouseEventHandler<HTMLButtonElement>;
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`flex w-full justify-center p-[8px] items-center gap-[16px] ${
                props.className || ""
            }`}
        >
            <p
                className="text-[14px] w-[40px] font-normal text-text-button-default flex items-center"
                children={left}
            />
            <p
                className="grow flex w-full items-left text-[16px] font-normal text-text-secondary"
                children={text}
            />
            <button
                onClick={onDelete}
                children={<Lucide.X width={16} fill="#737373" />}
            />
        </div>
    );
}
