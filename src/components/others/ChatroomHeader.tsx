import * as Lucide from "lucide-react";
import DetailedHeader from "./common/DetailedHeader"

type _on_click = React.MouseEventHandler<HTMLButtonElement>;

const ChatroomHeader = ({title, onSearch, onMenu, onExit, ...props}: {title: string, onSearch: _on_click, onMenu: _on_click, onExit: _on_click} & React.HTMLAttributes<HTMLDivElement>) => {
    return <DetailedHeader title={title} onExit={onExit} {...props} >
        <button onClick={onSearch} children={<Lucide.Search width={20} height={20} />} />
        <button onClick={onMenu} children={<Lucide.TextAlignJustify width={20} height={20} />} />
    </DetailedHeader>;
}
export default ChatroomHeader;