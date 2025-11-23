import Link from "next/link";

export default function AuthButton(
    {onClick, mode, children, ...props}: {onClick: any, mode: "orange" | "blue", children?: React.ReactNode} & React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
    return <button
    className="w-full px-[16px] py-[12px] rounded-[8px] flex justify-center items-center text-[18px]"
    onClick={onClick}
    style={{
        backgroundColor: mode === "orange" ? "var(--color-text-button-accent-orange-default)" : "var(--color-text-button-accent-blue-default)",
    }}><p 
    className="font-semibold text-white"
>{children}</p></button>;
}

export function AuthLink(
    {href, mode, children, ...props}: {href: string, mode: "orange" | "blue", children?: React.ReactNode} & React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
    return <Link
    className="w-full px-[16px] py-[12px] rounded-[8px] flex justify-center items-center text-[18px]"
    {...props}
    href={href}
    style={{
        backgroundColor: mode === "orange" ? "var(--color-text-button-accent-orange-default)" : "var(--color-text-button-accent-blue-default)",
    }}><p 
    className="font-semibold text-white"
>{children}</p></Link>;
}