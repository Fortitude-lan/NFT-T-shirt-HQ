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
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);
  useEffect(() => {
    // 确保只有在客户端渲染时才设置 eventSource
    const rootElement = document.getElementById("root");
    if (rootElement) {
      setEventSource(rootElement);
    }
  }, []); // 空依赖数组确保只有在组件首次渲染后执行

  if (!eventSource) {
    return null; // 在 eventSource 未设置时，渲染为空
  }

  return (
    <>
      {/* 1.加载 */}
      <Loading />
      {/* 2.控制板 */}
      <Leva collapsed />
      {/* 3.Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 2.5], fov: 30 }}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
        eventSource={eventSource}
        eventPrefix="client"
        dpr={[1, 1.5]}
      >
        {/* <OrbitControls /> */}
        <color attach="background" args={[statueBtns.bgColor]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Overlay />
    </>
  );
};
export default Home;
