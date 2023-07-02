import React from 'react'
import { Color, DirectionalLight } from 'three'
import { Stars, OrbitControls, useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import Earth from './Earth'
import *as THREE from 'three'
import { useRef } from 'react'

const MainContainer = () => {
    
  return (
    <>
        <color attach='background' args={['black']}/>
        <OrbitControls/>
        <AnimatedStars/>
        <Earth />
    </>
    )
}

export default MainContainer