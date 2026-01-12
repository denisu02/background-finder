import './Tag.css';

type TagProps = {
    children: React.ReactNode;
    color: string;
};

const Tag: React.FC<TagProps> = ({ children, color }) => {
    return (
        <span className="tag" style={{ color: `var(${color})` }}>
            #{children}
        </span>
    );
};

export default Tag;
