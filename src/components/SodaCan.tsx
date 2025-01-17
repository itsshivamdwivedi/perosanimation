import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// Define and export the SodaCanProps type
export type SodaCanProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  flavor?: string;
};

export function SodaCan(props: SodaCanProps) {
  const { nodes, materials } = useGLTF("/peanutbutterjar2.gltf");
  const cameraRef = useRef();

  return (
    <group
      position={props.position || [0, 0, 0]} // Default position
      rotation={props.rotation || [1.623, 0, 0.73]} // Default rotation
      scale={props.scale || [0.007, 0.007, 0.007]} // Default scale
    >
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Mesh001.geometry}
        material={materials["PEENUTBUTTER.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Mesh001_1.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Mesh001_2.geometry}
        material={materials.lable}
      />
    </group>
  );
}

export default function CenteredSodaCan() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#f0f0f0", // Optional background color
      }}
      camera={{ position: [0, 1.5, 3], fov: 35 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <SodaCan />
    </Canvas>
  );
}
useGLTF.preload("/peanutbutterjar2.gltf");
