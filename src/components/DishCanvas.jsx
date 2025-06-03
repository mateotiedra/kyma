/* eslint-disable react/no-unknown-property */
import { OrbitControls, Stats, useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const RotatingDish = ({ model, scale }) => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // Adjust speed as needed
    }
  });
  return <primitive ref={ref} object={model.scene} scale={scale} />;
};

RotatingDish.propTypes = {
  model: PropTypes.object.isRequired,
  scale: PropTypes.number,
};

const CameraLogger = ({ enabled }) => {
  const { camera } = useThree();
  useFrame(() => {
    if (!enabled) return;
    // Log camera position and rotation (angle in radians)
    console.log('Camera position:', camera.position.toArray());
    console.log('Camera rotation (Euler):', camera.rotation.toArray());
  });
  return null;
};

CameraLogger.propTypes = {
  enabled: PropTypes.bool,
};

const DishCanvas = ({
  modelUrl,
  camPos = [-5.6420153558161426, 3.9854443063593514, 1.5112565651280714],
  camRotat = [-1.2079611744858216, -0.9238947109821136, -1.126719858856303],
  scale = 5,
  className = '',
}) => {
  const dish = useGLTF(modelUrl);
  return (
    <div className={className}>
      <Canvas
        camera={{
          position: camPos,
          rotation: camRotat,
          fov: 50,
          near: 0.1,
          far: 200,
        }}
      >
        <RotatingDish model={dish} scale={scale} />
        <ambientLight intensity={3.0} />
        <Stats />
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={(Math.PI * 2) / 5}
          enableZoom={false}
        />
        <CameraLogger enabled={false} />
      </Canvas>
    </div>
  );
};

DishCanvas.propTypes = {
  modelUrl: PropTypes.string.isRequired,
  camPos: PropTypes.arrayOf(PropTypes.number),
  camRotat: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.number,
  className: PropTypes.string,
};

export default DishCanvas;
