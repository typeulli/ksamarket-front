import DetailedHeader from "./common/DetailedHeader";

const SectionHeader: typeof DetailedHeader = ({ title, onExit, ...props }) => {
    return <DetailedHeader title={title} onExit={onExit} {...props} />;
};
export default SectionHeader;
