import React, { useRef } from 'react';
import { SphereGeometry, MeshStandardMaterial, DirectionalLight, Clock } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Sun = () => {
  const geometry = new SphereGeometry(2, 32, 32);
  const material = new MeshStandardMaterial({ color: 'white' });

  const [sunTexture] = useTexture(['/src/assets/sun.jpg']);

  const moonRef = useRef();
  const clock = new Clock();

//   useFrame(() => {
//      moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 5;
//      moonRef.current.position.y = Math.cos(clock.getElapsedTime() * 0.2) * 5;
//      //moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 5;



//     moonRef.current.rotation.y += 0.001;
//   });

  return (
    <>
      <mesh geometry={geometry} material={material} position={[0, 0, 0]} ref={moonRef}>
        <meshStandardMaterial map={sunTexture} />
      </mesh>
    </>
  );
};

export default Sun;
