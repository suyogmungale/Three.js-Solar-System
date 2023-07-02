import React, { useRef } from 'react';
import { SphereGeometry, MeshStandardMaterial, DirectionalLight, Clock } from 'three';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Moon = () => {
  const geometry = new SphereGeometry(0.2, 32, 32);
  const material = new MeshStandardMaterial({ color: 'white' });

  const [moonTexture] = useTexture(['/src/assets/lroc_color_poles_1k.jpg']);
  

  const moonRef = useRef();
  const clock = new Clock();

  useFrame(() => {
     moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 2;
     moonRef.current.position.y = Math.cos(clock.getElapsedTime() * 0.2) * 2;
     //moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.2) * 5;



    moonRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <mesh geometry={geometry} material={material} position={[5, 0, 0]} ref={moonRef}>
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </>
  );
};

export default Moon;
