"use client";

import * as Lucide from "lucide-react";
import { useRef } from "react";

export default function ImageUploadButton({
    onFileSelect,
    ...props
}: {
    onFileSelect: (file: File) => void;
} & React.HTMLAttributes<HTMLButtonElement>) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const Icon = Lucide.Camera;

    /** 버튼 클릭 → 숨겨진 파일 input 클릭 */
    const handleClick = () => {
        fileInputRef.current?.click();
    };

    /** 파일 선택 시 부모에게 파일 전달 */
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onFileSelect(file);
    };

    return (
        <div>
            {/* 버튼 */}
            <button
                onClick={handleClick}
                className="w-[150px] h-[200px] rounded-[8px] border-[2px] flex flex-col items-center justify-center gap-[8px]"
                style={{
                    borderColor:
                        "var(--color-border-button-accent-orange-default)",
                }}
                {...props}
            >
                <Icon
                    color={"var(--color-text-button-accent-orange-default)"}
                />
                <p
                    className="font-semibold text-[18px] flex items-center justify-center"
                    style={{
                        color: "var(--color-text-button-accent-orange-default)",
                    }}
                >
                    이미지 업로드
                </p>
            </button>

            {/* 숨겨진 파일 인풋 */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
}
