import Tag from './Tag';
import type { Background } from './types';

type CardProps = Background;

const Card: React.FC<CardProps> = ({
    name,
    description,
    image,
    price,
    tags,
}) => {
    const hasPrice = !!price;

    return (
        <div className="rounded text-center overflow-hidden shadow-xl/30 bg-white">
            <div>
                <img
                    className="w-full h-75"
                    src={`http://localhost:3000${image}`}
                    alt={name}
                />
            </div>
            <div className="ml-3 p-2">
                <div className="font-bold text-xl mb-2 text-gray-700">
                    {name}
                </div>
                <div className="text-gray-500 text-base mb-2">
                    {description}
                </div>
                {hasPrice ? (
                    <div className="text-gray-600 text-base mb-2">${price}</div>
                ) : (
                    <div className="text-red-600 text-base mb-2">Free</div>
                )}
                {tags &&
                    tags.map((tag) => (
                        <Tag
                            key={tag}
                            color="bg-gray-200 hover:bg-gray-300 m-2"
                        >
                            {tag}
                        </Tag>
                    ))}
            </div>
        </div>
    );
};

export default Card;
