import Card from './Card';
import type { Background } from './types';

type SectionProps = {
    title: string;
    cards: Background[];
};
const CardList: React.FC<SectionProps> = ({ title, cards }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mt-24 mb-4 text-gray-700">
                {title}
            </h1>

            <span className="grid grid-cols-5 gap-4">
                {cards.length ? (
                    cards.map((card) => <Card key={card.id} {...card}></Card>)
                ) : (
                    <div className="text-gray-500">
                        No backgrounds available.
                    </div>
                )}
            </span>
        </div>
    );
};

export default CardList;
