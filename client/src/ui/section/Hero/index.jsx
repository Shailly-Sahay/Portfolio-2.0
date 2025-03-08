import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "../../components/3d/HackerRoom";
import Loader from "../../components/Loader";
// import {Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../../constants";
import Target from "../../components/3d/Target";

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: { value: 0, min: -10, max: 10 },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="section-pd min-h-screen w-full flex flex-col relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-52 mt-20 ">
        <h3 className=" text-white text-center mb-10">
          Hi, I am Shailly <span className="waving-hand">👋</span>
        </h3>
        <h2 className="glowing-text text-white text-center  font-bold">
          Building Products & Brands
        </h2>
      </div>

      <div className="w-full h-full absolute inset-0 ">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 14]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, Math.PI, 0]}
              // scale={[controls.scale, controls.scale, controls.scale]}
              // position={[
              //   controls.positionX,
              //   controls.positionY,
              //   controls.positionZ,
              // ]}
              // rotation={[
              //   controls.rotationX,
              //   controls.rotationY,
              //   controls.rotationZ,
              // ]}
            />
            <group>
              <Target position={sizes.targetPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
