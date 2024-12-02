/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Hesin
 * @Date: 2024-12-02 23:38:12
 * @LastEditors: Hesin
 * @LastEditTime: 2024-12-03 00:39:50
 */
"use client";

import { useProgress } from "@react-three/drei";

const Loading = () => {
  const { progress, active } = useProgress();
  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">3D Web Loading</h1>
        <div className="ball"></div>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
