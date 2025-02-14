import PropTypes from 'prop-types';

const Card = ({ children, bg = 'bg-gray-100' }) => {
  return <div className={`${bg} rounded-lg p-6 shadow-lg`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string
};

export default Card;
