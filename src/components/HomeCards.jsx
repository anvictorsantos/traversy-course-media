import { Link } from 'react-router-dom';

import cards from '../cards.json';

import Card from './Card';

const HomeCards = () => {
  return (
    <section>
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          {cards.map((card, index) => (
            <Card key={index} bg={card.bg}>
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2 mb-4">{card.description}</p>
              <Link
                to={card.target.link}
                className="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
              >
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
