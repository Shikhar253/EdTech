import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls, useAnimations } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
  current: null,
})

function Model({ ...props }) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/siddartha_human_lungs/scene.gltf')
  const { actions } = useAnimations(animations, group)
  const [hovered, set] = useState(null)
  console.log(hovered)
  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.1, -0.01]}>
            <mesh geometry={nodes.Object_16.geometry} material={materials['Material.007']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_8.geometry} material={nodes.Object_8.material} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_10.geometry} material={nodes.Object_10.material} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
          </group>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.pasted__Respiratoy_Bronchi_mat} />
          </group>
        </group>
      </group>
    </group>
  )
}

function Details() {

  const snap = useSnapshot(state)
  if (snap.current === "Material.007") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Lung</h1>
      </div>
    )
  }
  else if (snap.current === "Material.001") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Trachea</h1>
      </div>
    )
  }
  else if (snap.current === "Material.009") {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-3xl uppercase">Larynx</h1>
      </div>
    )
  }
  else {
    return (
      <div className="h-full md:flex md:flex-col md:justify-center">
        <h1 className="text-2xl tracking-wider">Click on diffrent parts of 3D model to know more</h1>
        <p className="self-center mx-8 text-xl tracking-wide text-justify">To view the 3D model in AR, scan the QR code or click on the button below.</p>

        <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
          <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echo3d.co/morning-hill-2019/5b4aded6-0a68-4f72-9446-2b31a6366f5a.png" alt="QR Code" />
          <a href="https://go.echo3d.co/xmyz" target="_blank" rel="noreferrer">
            <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500  hover:shadow-lg">View in AR</button>
          </a>
        </div>
      </div>
    )
  }
}

export default function Lungs() {
  return (
    <>
      <div className="pt-8 text-white">

        <Link to="/learn" className="ml-8">Go Back</Link>

        <div className="grid w-full py-10 place-items-center">
          <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
            Lungs
          </h1>
          <div className="inline-flex h-1 bg-secondary rounded-full w-36"></div>
          <div className="text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The lungs are the primary organs of the respiratory system in humans and most animals including a few fish, and some snails. In mammals and most other vertebrates, two lungs are located near the backbone on either side of the heart. This work is based on "Siddartha_Human Lungs" (https://sketchfab.com/3d-models/siddartha-human-lungs-ae95a945bc0340699d4d6df88e1148c3) by siddu stone 777 (https://sketchfab.com/siddustone777) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)</div>
        </div>

        <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

          <div className="w-full h-128 px-4 outline-none cursor-grab md:col-span-2 lg:block">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 10, 10]} castShadow />
              <Suspense fallback={null}>
                <Model scale={5.5} />
                <Environment preset="city" />
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>

          <div className="mt-16 md:mt-0 md:col-span-1 p-4">
            <Details />
          </div>

        </div>

      </div>

    </>
  )
}
