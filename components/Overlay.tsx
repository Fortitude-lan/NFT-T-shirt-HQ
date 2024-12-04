import { Logo } from "@pmndrs/branding";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiFillCamera,
  AiOutlineArrowLeft,
  AiOutlineHighlight,
  AiOutlineShopping,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "@/utils/store";
import { useState } from "react";

const Overlay = () => {
  const snap = useSnapshot(state);
  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <Logo width="40" height="40" />
        <motion.div
          animate={{ x: snap.intro ? 0 : 100, opacity: snap.intro ? 1 : 0 }}
          transition={transition}
        >
          <AiOutlineShopping size="3em" />
        </motion.div>
      </motion.header>
      <AnimatePresence>
        <motion.section key="custom" {...config}>
          <Customizer />
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

function Customizer() {
  const snap = useSnapshot(state);
  const [tc, settc] = useState("#726DE8");
  return (
    <div className="customizer">
      {/* category */}
      {/* <div className="category-options">
        {snap.colors.map((color) => (
          <div
            key={color}
            className={`circle  wh30`}
            style={{ background: color }}
            onClick={() => (state.tcolor = color)}
          ></div>
        ))}
      </div> */}
      {/* decals */}
      <div className="decals">
        <div className="decals--container">
          {snap.decals.map((decal) => (
            <div
              key={decal}
              className={`decal`}
              onClick={() => (state.decal = decal + "_thumb")}
            >
              <img src={"/textures/" + decal + "_thumb.png"} alt="brand" />
            </div>
          ))}
        </div>
      </div>
      {/* color-options */}
      <div className="color-options">
        {snap.colors.map((color) => (
          <div
            key={color}
            className={`circle  wh30`}
            style={{
              background: color,
              borderWidth: tc == color ? "3px" : "0",
            }}
            onClick={() => {
              console.log(state.tcolor);
              console.log(tc);
              settc(color);
              state.tcolor = color;
            }}
          ></div>
        ))}
      </div>
      {/* texture */}
      <div className="texture">
        <div className="texture--container">
          {snap.fabrics.map((fabric, idx) => (
            <div
              key={fabric}
              className={`circle bp`}
              style={{ overflow: "hidden" }}
              onClick={() => (state.curfabric = idx)}
            >
              <img src={`/textures/fabricCategory/${fabric}_bg.png`} alt="" />
            </div>
          ))}
        </div>
      </div>
      <button className="see">Make it Unique</button>
      <button
        className="share"
        style={{ background: snap.color }}
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector("canvas")
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD
        <AiFillCamera size="1.3em" />
      </button>
      {/* <button
        className="exit"
        style={{ background: snap.color }}
        onClick={() => (state.intro = true)}
      >
        GO BACK
        <AiOutlineArrowLeft size="1.3em" />
      </button> */}
    </div>
  );
}
export default Overlay;
