/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Hesin
 * @Date: 2024-12-03 00:28:11
 * @LastEditors: Hesin
 * @LastEditTime: 2024-12-03 00:35:56
 */
"use client";
import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "@/utils/store";

const Shirt = (props) => {
  const snap = useSnapshot(state);
  const texture = useTexture(`/textures/${snap.decal}.png`);
  const { nodes, materials } = useGLTF("/models/shirt_baked_collapsed.glb");
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.tcolor, 0.25, delta)
  );
  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        map={texture}
      />
    </mesh>
  );
};
export default Shirt;
useGLTF.preload("/models/shirt_baked_collapsed.glb");
