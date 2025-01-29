import PropTypes from 'prop-types';

import Card from './Card';

const HomeCards = (props) => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {props.cardContent.map((card, index) => (
            <Card key={index}>
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2 mb-4">{card.description}</p>
              <a
                href={card.target.link}
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                {card.target.text}
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

HomeCards.propTypes = {
  cardContent: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      target: PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  )
};

export default HomeCards;
