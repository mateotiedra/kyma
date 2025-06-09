import PropTypes from 'prop-types';
import DishLine from './DishLine';

function DishList({ title, subtitle, dishes, className = '' }) {
  return (
    <div className={className + ' bg-white py-5'}>
      {(title || subtitle) && (
        <div className='top-0 z-10 bg-white px-5 pb-3 '>
          {title && <h2>{title}</h2>}
          {subtitle && <p className='font-bold leading-3'>{subtitle}</p>}
        </div>
      )}
      <div
        className={
          'flex flex-row flex-wrap items-stretch justify-between gap-4 px-5' +
          (subtitle || title ? ' mt-4' : '')
        }
      >
        {dishes.map((dish, index) => (
          <DishLine className='w-full sm:w-[47%]' key={index} {...dish} />
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
