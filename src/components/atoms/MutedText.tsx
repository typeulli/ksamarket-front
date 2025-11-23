export default function MutedText(
    {...props}: {} & React.HTMLAttributes<HTMLParagraphElement>
) {
    return <p className={`font-medium text-[14px] text-text-muted ${props.className || ''}`}>{props.children}</p>;
}