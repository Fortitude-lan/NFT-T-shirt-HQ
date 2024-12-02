"use client";
import Loading from "@/components/Loading";
import Model from "@/components/Model";
import Overlay from "@/components/Overlay";
// import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";

// import dynamic from "next/dynamic";
// const Loading = dynamic(() => import("./loading"));

const Home = () => {
  const statueBtns = useControls("Basic", {
    bgColor: "#fff",
  });
  return (
    <div className="w=[100vw] h-[100vh]">
      {/* 1.加载 */}
      <Loading />
      {/* 2.控制板 */}
      <Leva collapsed />
      {/* 3.Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 2.5], fov: 30 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        eventPrefix="client"
        dpr={[1, 1.5]}
      >
        {/* <OrbitControls enableDamping /> */}
        <color attach="background" args={[statueBtns.bgColor]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Overlay />
    </div>
  );
};
export default Home;
