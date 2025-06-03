import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

// The loading page
function Loading({ notFullPage, message }) {
  const [seconds, setSeconds] = useState(3);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    if (!isCancelled) {
      if (seconds > 0) {
        setTimeout(() => {
          if (!isCancelled) setSeconds(seconds - 1);
        }, 1000);
      } else {
        setDisplayMessage(true);
      }
    }
    return () => {
      isCancelled = true;
    };
  }, [setDisplayMessage, seconds]);

  return (
    <div className='h-screen flex-centered -z-30'>
      <Navbar pageName='loading' />
      <div
        className={`${
          !notFullPage ? 'absolute inset-0 h-screen' : ''
        } flex justify-center items-center w-full p-6 -z-30`}
      >
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900'></div>
          <p
            className={`text-center transition duration-500 ${
              displayMessage ? 'text-gray-900' : 'text-transparent'
            }`}
          >
            {message ? message : 'The loading can take up to few seconds...'}
          </p>
        </div>
      </div>
    </div>
  );
}

Loading.propTypes = {
  notFullPage: PropTypes.bool,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default Loading;
