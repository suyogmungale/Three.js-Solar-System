import React from 'react';
import { SphereGeometry, MeshStandardMaterial, Mesh, DirectionalLight,Clock } from 'three';
import { useTexture } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Moon from './Moon';
import *as THREE from 'three'

const Earth = () => {
  const geometry = new SphereGeometry(1, 32, 32);
  const material = new MeshStandardMaterial({ color: 'blue' });
  const light = new DirectionalLight(0xffffff, 1);
  const earthPositionRef = useRef(new THREE.Vector3(8,0,0))
  const [earthTexture] = useTexture(['/src/assets/2k_earth_daymap.jpg'])
  
  
    const earthRef = useRef()
    
    const clock = new Clock();
 
    useFrame(() => {
      const angle = clock.getElapsedTime() * 0.5
      const distance = 8
      const x = Math.sin(angle) * distance
      const z = Math.cos(angle) * distance


        earthRef.current.position.set(x,0,z)
        earthRef.current.rotation.y += 0.001
        earthPositionRef.current =  earthRef.current.position
    })

  return (
    <>
    <group position={[4,0,0]}>
      <mesh ref={earthRef} geometry={geometry} material={material}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
         <ambientLight/>
      </mesh>
      {/* <primitive object={light} position={[10, 10, 10]} intensity={3} /> */}
      <Moon/>
      </group>
      
    </>
  );
};

export default Earth;
