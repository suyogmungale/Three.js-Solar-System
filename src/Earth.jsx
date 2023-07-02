import React from 'react';
import { SphereGeometry, MeshStandardMaterial, Mesh, DirectionalLight } from 'three';
import { useTexture } from '@react-three/drei';

const Earth = () => {
  const geometry = new SphereGeometry(1, 32, 32);
  const material = new MeshStandardMaterial({ color: 'blue' });
  const light = new DirectionalLight(0xffffff, 1);

  const [earthTexture] = useTexture(['/src/assets/2k_earth_daymap.jpg'])

  return (
    <>
      <mesh geometry={geometry} material={material}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
         <ambientLight/>
      </mesh>
      {/* <primitive object={light} position={[10, 10, 10]} intensity={3} /> */}
     
      
    </>
  );
};

export default Earth;
