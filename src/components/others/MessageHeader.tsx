import DetailedHeader from "./common/DetailedHeader"

const MessageHeader: typeof DetailedHeader = ({title, onExit, ...props}) => {
    return <DetailedHeader title={title} onExit={onExit} {...props} />;
}
export default MessageHeader;