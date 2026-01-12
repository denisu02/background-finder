import Tag from '../Tag/Tag';
import type { Background } from '../types';
import './Card.css';

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
        <div className="card-container">
            <div>
                <img src={`http://localhost:3000${image}`} alt={name} />
            </div>
            <div className="card-spacing">
                <div className="card-name">{name}</div>
                <div className="card-description">{description}</div>
                {hasPrice ? (
                    <div className="card-price">${price}</div>
                ) : (
                    <div className="card-free">Free</div>
                )}
                {tags &&
                    tags.map((tag) => (
                        <Tag key={tag} color="--color-gray-500">
                            {tag}
                        </Tag>
                    ))}
            </div>
        </div>
    );
};

export default Card;
