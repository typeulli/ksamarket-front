export default function MutedText(
    {text, ...props}: {text: string} & React.HTMLAttributes<HTMLParagraphElement>
) {
    return <p {...props} className={`w-full h-[17px] font-medium text-[14px] text-text-muted ${props.className || ''}`}>{text}</p>;
}