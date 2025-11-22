export default function TitleText(
    {text, ...props}: {text: string} & React.HTMLAttributes<HTMLHeadingElement>
) {
    return <h1 {...props} className={`w-full h-[38px] font-extrabold text-[32px] ${props.className || ''}`}>{text}</h1>;
}