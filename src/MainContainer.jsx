import React from 'react'
import { Color, DirectionalLight } from 'three'
import { Stars, OrbitControls, useHelper } from '@react-three/drei'
import AnimatedStars from './AnimatedStars'
import Earth from './Earth'
import *as THREE from 'three'
import { useRef } from 'react'
import Sun from './Sun'

const MainContainer = () => {

  
    
  return (
    <>
        <color attach='background' args={['black']}/>
        <OrbitControls/>
        <AnimatedStars/>
        <Sun/>
        <Earth />
    </>
    )
}

export default MainContainer