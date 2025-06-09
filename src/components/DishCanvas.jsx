/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const DishCanvas = ({
  modelUrl,
  controlsEnabled = true,
  className = '',
  resetViewRef,
  defaultZoom = 2,
}) => {
  const modelViewerRef = useRef(null);

  // Handler to reset the camera orbit
  const handleResetView = () => {
    if (modelViewerRef.current) {
      modelViewerRef.current.setAttribute(
        'camera-orbit',
        `0rad 1.2rad ${defaultZoom}m`
      );
      modelViewerRef.current.setAttribute('field-of-view', '45deg');
      /* modelViewerRef.current.setAttribute('zoom', '1');
      modelViewerRef.current.setAttribute('camera-target', 'auto auto auto'); */
    }
  };

  // Expose the reset handler to parent via ref
  if (resetViewRef) {
    resetViewRef.current = handleResetView;
  }

  // Rotating animation: increment theta (first value of camera-orbit) continuously
  useEffect(() => {
    let theta = 0;
    let animationFrameId;

    const animate = () => {
      if (modelViewerRef.current && !controlsEnabled) {
        theta += 0.005; // Adjust speed as needed
        modelViewerRef.current.setAttribute(
          'camera-orbit',
          `${theta}rad 1.2rad ${defaultZoom}m`
        );
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [controlsEnabled, defaultZoom]);

  return (
    <div className={className}>
      <model-viewer
        ref={modelViewerRef}
        src={modelUrl}
        alt='3D Dish Model'
        camera-controls={controlsEnabled}
        min-camera-orbit={`-500rad 0rad ${
          controlsEnabled ? 0.5 : defaultZoom
        }m`}
        max-camera-orbit={`500rad 1.57rad ${
          controlsEnabled ? 3 : defaultZoom
        }m`}
        default-camera-orbit={`0rad 1.2rad ${defaultZoom}m`}
        disable-pan
        reveal='auto'
        loading='eager'
        style={{
          width: '100%',
          height: '100%',
          '--progress-bar-color': 'transparent',
        }}
        ar={controlsEnabled}
        onLoad={(e) => {
          if (e.target && e.target.style) {
            e.target.style.willChange = '';
          }
        }}
      ></model-viewer>
    </div>
  );
};

DishCanvas.propTypes = {
  modelUrl: PropTypes.string.isRequired,
  camPos: PropTypes.arrayOf(PropTypes.number),
  camRotat: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.number,
  className: PropTypes.string,
  controlsEnabled: PropTypes.bool,
  resetViewRef: PropTypes.object,
  defaultZoom: PropTypes.number,
};

export default DishCanvas;
