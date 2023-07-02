import { useState } from 'react'
import MainContainer from './MainContainer'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Canvas>
    <MainContainer/>
   </Canvas>
  )
}

export default App
