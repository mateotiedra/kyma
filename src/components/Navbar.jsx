import PropTypes from 'prop-types';
import { FaHouse } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ pageName, hideHome, over }) => {
  const baseUrl = import.meta.env.BASE_URL || { baseUrl };

  return (
    <>
      <nav className='flex-centered w-full absolute top-0 left-0 border-b-1 border-b-gray-300 px-6'>
        <div className='flex flex-row justify-center w-full max-w-4xl relative px-4 my-4'>
          {!hideHome && (
            <HashLink
              className='text-2xl hover:cursor-pointer flex-centered p-2 absolute top-1/2 left-0 translate-y-[-50%]'
              to='/'
            >
              <FaHouse />
            </HashLink>
          )}
          <h1 className='text-xl'>{pageName}</h1>
        </div>
      </nav>
      {!over && (
        <nav className='flex-centered w-full border-b-1 border-b-gray-300 px-6 opacity-0 -z-10'>
          <div className='flex flex-row justify-center w-full max-w-4xl relative px-4 my-4'>
            {!hideHome && (
              <HashLink
                className='text-2xl hover:cursor-pointer flex-centered p-2 absolute top-1/2 left-0 translate-y-[-50%]'
                to='/'
              >
                <FaHouse />
              </HashLink>
            )}
            <h1 className='text-xl'>{pageName}</h1>
          </div>
        </nav>
      )}
    </>
  );
};

Navbar.propTypes = {
  pageName: PropTypes.string.isRequired,
  hideHome: PropTypes.bool,
  over: PropTypes.bool,
};

export default Navbar;
