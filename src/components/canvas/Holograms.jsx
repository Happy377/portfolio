import {Suspense, useEffect, useState} from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'

const Holograms = (props) => {
  const { nodes, materials } = useGLTF('./hologram/holo_portfolio.gltf')
  return (
    <group {...props} dispose={null} scale={1.3} position={[0, -0.11, 0]} rotation={[0, 20, 0]}>
      <mesh
        geometry={nodes.Text.geometry}
        material={nodes.Beams}
        position={[-0.008, 0.067, 0]}
        rotation={[1.222, 0, 0]}
        scale={0.041}
      />
      <mesh geometry={nodes.Hologram.geometry} material={materials.Beams}/>
      <mesh geometry={nodes.Source.geometry} material={nodes.Source.material} scale={0.001} />
    </group>
  )
}

const HologramsCanvas = () => {

  return (
    <Canvas
      frameloop='demand'
      camera={{position: [20, 3, 5], fov: 1}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Holograms/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

  export default HologramsCanvas;