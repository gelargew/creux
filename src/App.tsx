import { Suspense, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import EmptyRoom from './components/EmptyRoom'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <div className="App">
      <Canvas gl={{ alpha: false }} dpr={[1, 1.5]}>
        <OrbitControls />
        <Suspense fallback={null}>
          <EmptyRoom scale={0.1} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
