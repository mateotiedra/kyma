import { useState } from 'react';
import PropTypes from 'prop-types';
import DishCanvas from './DishCanvas';

const DishLine = ({
  name,
  price,
  ingredients,
  fontStyle,
  className,
  modelUrl,
  scale,
}) => {
  const [canvasExpanded, setCanvasExpanded] = useState(false);
  const toggleCanvas = () => {
    setCanvasExpanded(!canvasExpanded);
  };

  return (
    <div className={className + ' flex flex-row gap-y-2 items-center'}>
      {canvasExpanded && (
        <div className='h-screen w-screen fixed top-0 left-0 bg-white z-40 '>
          <h2 className='absolute top-6 left-1/2 -translate-x-1/2'>{name}</h2>
          <button
            className='absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-button'
            onClick={toggleCanvas}
          >
            Close
          </button>
          <DishCanvas
            className='w-full h-full border-cyan-400 rounded-lg'
            modelUrl={modelUrl}
            camPos={[
              -5.6420153558161426, 3.9854443063593514, 1.5112565651280714,
            ]}
            camRotat={[
              -1.2079611744858216, -0.9238947109821136, -1.126719858856303,
            ]}
            scale={scale}
          />
        </div>
      )}
      <div className='flex flex-col justify-center flex-2/3'>
        <div className='flex justify-between font-semibold text-lg'>
          <h3 className={`${fontStyle}`}>{name}</h3>
        </div>
        <p className='caption leading-4 relative'>{ingredients}</p>
      </div>
      {modelUrl && (
        <div
          className='w-32 h-10 mt-2 relative flex-1/3'
          onClick={toggleCanvas}
        >
          <DishCanvas
            className='h-32 w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            modelUrl={modelUrl}
            camPos={[
              -5.6420153558161426, 3.9854443063593514, 1.5112565651280714,
            ]}
            camRotat={[
              -1.2079611744858216, -0.9238947109821136, -1.126719858856303,
            ]}
            scale={scale}
          />
        </div>
      )}
      <p className='justify-self-end'>{price}</p>
    </div>
  );
};

DishLine.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  fontStyle: PropTypes.string,
  className: PropTypes.string,
  modelUrl: PropTypes.string,
  scale: PropTypes.number,
};

export default DishLine;
