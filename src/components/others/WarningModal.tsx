import React from "react";
import * as Lucide from "lucide-react";

interface WarningModalProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: (action: "leave" | "continue" | "close") => void;
    mode?: "orange" | "blue";
}

export default function WarningModal({
    open,
    onClose,
    mode,
    ...props
}: WarningModalProps) {
    if (!open) return null;

    const handleOverlayClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        // 모달 내부 클릭은 onClose 되지 않도록
        if (e.target === e.currentTarget) {
            onClose("leave");
        }
    };

    const color_icon = mode === "orange" ? "#F54900" : "#155DFC";
    const color_background =
        mode === "orange"
            ? "bg-background-accent-orange"
            : "bg-background-accent-blue";
    const color_border =
        mode === "orange"
            ? "border-border-button-accent-orange-default"
            : "border-border-button-accent-blue-default";
    const color_text =
        mode === "orange"
            ? "text-text-button-accent-orange-default"
            : "text-text-button-accent-blue-default";

    return (
        <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex items-center justify-center z-50"
            onClick={handleOverlayClick}
            {...props}
        >
            <div className="bg-white rounded-[8px] p-[24px] max-w-sm w-full flex flex-col gap-[24px]">
                <Lucide.AlertTriangle
                    width={40}
                    height={40}
                    color={color_icon}
                    strokeWidth={1.5}
                    className="self-center"
                />
                <div className="flex flex-col gap-[8px]">
                    <p className="text-[20px] font-semibold text-black text-center">
                        페이지를 떠나시겠습니까?
                    </p>
                    <p className="text-[16px] font-semibold text-text-muted text-center">
                        지금까지 작성중인 내용이 모두 사라집니다
                    </p>
                </div>
                <div className="w-full gap-[12px] flex self-center">
                    <button
                        className={`w-full grow border-[1px] rounded-[8px] py-[12px] text-[16px] font-semibold ${color_border} ${color_text}`}
                        onClick={() => onClose("leave")}
                        children="떠나기"
                    />
                    <button
                        className={`w-full grow border-[1px] rounded-[8px] py-[12px] text-[16px] font-bold ${color_background} text-white`}
                        onClick={() => onClose("continue")}
                        children="계속하기"
                    />
                </div>
            </div>
        </div>
    );
}
