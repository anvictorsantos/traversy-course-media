import { Link } from 'react-router-dom';

import cards from '../cards.json';

import Card from './Card';

const HomeCards = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {cards.map((card, index) => (
            <Card key={index} bg={card.bg}>
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2 mb-4">{card.description}</p>
              <Link
                to={card.target.link}
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                {card.target.text}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
