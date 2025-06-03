import PropTypes from 'prop-types';
import DishLine from './DishLine';

function DishList({ title, subtitle, dishes, className = '' }) {
  return (
    <div className={className}>
      {title && <h2>{title}</h2>}
      {subtitle && <p className='font-bold leading-3'>{subtitle}</p>}
      <div
        className={'flex flex-col gap-y-4' + (subtitle || title ? ' mt-4' : '')}
      >
        {dishes.map((dish, index) => (
          <DishLine key={index} {...dish} />
        ))}
      </div>
    </div>
  );
}

DishList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      ingredients: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default DishList;
