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
    <div
      className={
        className +
        ' flex flex-row gap-3 items-stretch justify-between cursor-pointer'
      }
    >
      <div className='flex flex-col justify-center max-w-2/3'>
        <h3 className={`${fontStyle}`}>{name}</h3>
        <p className=''>CHF {price}</p>
        <p className='caption line-clamp-2'>{ingredients}</p>
      </div>
      {modelUrl && (
        <div
          className={
            canvasExpanded
              ? 'h-[100dvh] w-[100dvw] fixed top-0 left-0 bg-neutral-50 z-40 '
              : 'min-w-[100px] max-w-[120px] aspect-square relative flex-grow bg-neutral-50 overflow-hidden rounded-lg'
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
                : 'h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            }
            modelUrl={modelUrl}
            controlsEnabled={canvasExpanded}
            resetViewRef={resetViewRef}
          />
        </div>
      )}
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
