import Card from '../Card/Card';
import type { Background } from '../types';
import './CardList.css';

type SectionProps = {
    title: string;
    cards: Background[];
};
const CardList: React.FC<SectionProps> = ({ title, cards }) => {
    return (
        <div className="card-list-container">
            <h1>{title}</h1>

            <div className="cards-list">
                {cards.length ? (
                    cards.map((card) => <Card key={card.id} {...card}></Card>)
                ) : (
                    <div className="not-available">
                        No backgrounds available.
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardList;
