import PropTypes from 'prop-types';

const DishLine = ({ name, price, ingredients, fontStyle, className }) => (
  <div className={className}>
    <div className='flex justify-between font-semibold text-lg'>
      <h3 className={`${fontStyle}`}>{name}</h3>
      <p>{price}</p>
    </div>
    <caption className='w-full text-start leading-4 relative'>
      {ingredients}
    </caption>
  </div>
);

DishLine.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  fontStyle: PropTypes.string,
  className: PropTypes.string,
};

export default DishLine;
