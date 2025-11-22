import * as Lucide from "lucide-react";

import Input from "../atoms/utils/Input";

export default function SearchBox(
    {value, onChange, onClear, onSearch, ...props}: {
        value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, onClear?: () => void, onSearch: (event: React.MouseEvent<HTMLButtonElement>) => void
    } & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">
) {
    return <div {...props} className={`w-[364px] min-h-[64px] flex flex-col gap-[4px] ${props.className || ''}`}>
        <Input value={value} onChange={onChange} onClear={onClear} placeholder="검색어를 입력하세요." children={
        <button
            onClick={onSearch}
            children={<Lucide.Search width={16} />}
        />} />
    </div>;
}