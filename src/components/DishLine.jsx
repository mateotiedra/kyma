import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import DishCanvas from './DishCanvas';

const DishLine = ({
  name,
  price,
  ingredients,
  fontStyle,
  className,
  modelUrl,
}) => {
  const [canvasExpanded, setCanvasExpanded] = useState(false);
  const resetViewRef = useRef(null);

  const toggleCanvas = () => {
    if (canvasExpanded && resetViewRef.current) {
      resetViewRef.current(); // Reset view when closing expanded view
    }
    setCanvasExpanded(!canvasExpanded);
  };

  return (
    <div className={className + ' flex flex-row gap-y-2 items-center'}>
      <div className='flex flex-col justify-center flex-2/3'>
        <div className='flex justify-between font-semibold text-lg'>
          <h3 className={`${fontStyle}`}>{name}</h3>
        </div>
        <p className='caption leading-4 relative'>{ingredients}</p>
      </div>
      {modelUrl && (
        <div
          className={
            canvasExpanded
              ? 'h-[100dvh] w-[100dvw] fixed top-0 left-0 bg-white z-40 '
              : 'w-32 h-10 mt-2 relative flex-1/3'
          }
          onClick={() => {
            if (!canvasExpanded) toggleCanvas();
          }}
        >
          {canvasExpanded && (
            <>
              <h2 className='absolute top-6 left-1/2 -translate-x-1/2 w-full text-center'>
                {name}
              </h2>
              <button
                className='absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-button'
                onClick={toggleCanvas}
              >
                Fermer
              </button>
            </>
          )}
          <DishCanvas
            className={
              canvasExpanded
                ? 'w-full h-full'
                : 'h-32 w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            }
            modelUrl={modelUrl}
            controlsEnabled={canvasExpanded}
            resetViewRef={resetViewRef}
          />
        </div>
      )}
      <p className='justify-self-end self-end'>{price}</p>
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
