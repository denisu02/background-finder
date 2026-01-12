import Card from './Card';
import type { Background } from './types';

type SectionProps = {
    title: string;
    cards: Background[];
};
const CardList: React.FC<SectionProps> = ({ title, cards }) => {
    return (
        <div className="mb-24">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">{title}</h1>

            <span className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
