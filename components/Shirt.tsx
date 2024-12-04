"use client";
import React, { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "@/utils/store";
import { useControls } from "leva";

// 加载纹理的路径

const Shirt = (props) => {
  const snap = useSnapshot(state);
  const textures = snap.fabrics.map((i) => `/textures/${i}/fabric_normal.png`);

  const texture = useTexture(`/textures/${snap.decal}.png`);
  const txs = useTexture(textures);

  const { nodes, materials } = useGLTF("/models/shirt_baked_collapsed.glb");

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.tcolor, 0.25, delta);
    easing.dampC(materials.lambert1.color, snap.tcolor, 0.25, delta);
    // 根据当前的 tx 设置 normalMap
    // 在这里你可以动态切换纹理或者做其他操作
    console.log("snap.curfabric", snap.curfabric);
    materials.lambert1.normalMap = txs[snap.curfabric]; // 使用第二个纹理作为法线贴图
  });
  // 切换纹理的按钮事件

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
[
  "/BoucleFabricBubbly/BoucleFabricBubbly_BaseColor.jpg",
  "/BoucleFabricBubbly/BoucleFabricBubbly_Metallic.jpg",
  "/BoucleFabricBubbly/BoucleFabricBubbly_Normal.png",
  "/BoucleFabricBubbly/BoucleFabricBubbly_Roughness.jpg",
].forEach(useTexture.preload);
