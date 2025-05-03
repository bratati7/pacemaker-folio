"use client";
import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Heart(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/realistic_human_heart.glb");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={2}
    >
      <group ref={group} {...props} dispose={null} scale={1.2}> {/* Increase this scale to make it even bigger */}
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.hartZBrush_defualt_group_Heart_Tex_0.geometry}
              material={materials.Heart_Tex}
              scale={1} // Adjusted down from 286.365 due to outer scale
            />
          </group>
        </group>
      </group>
    </Float>
  );
}

useGLTF.preload("/realistic_human_heart.glb");
