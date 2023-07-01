import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Color } from 'three'
import { Stars, OrbitControls } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'

const MainContainer = () => {
  return (
    <Canvas>
        <color attach='background' args={['black']}/>
        <OrbitControls/>
        <AnimatedStars/>
    </Canvas>
    )
}

export default MainContainer