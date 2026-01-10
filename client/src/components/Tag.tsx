type TagProps = {
    children: React.ReactNode;
    color: string;
};

const Tag: React.FC<TagProps> = ({ children, color }) => {
    return (
        <span className={`inline-block px-3 py-1 text-sm font-semibold text-gray-700 rounded-full ${color}`}>
            #{children}
        </span>
    );
};

export default Tag;
