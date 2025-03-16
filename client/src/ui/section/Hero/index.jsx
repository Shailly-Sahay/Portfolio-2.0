import { PerspectiveCamera } from "@react-three/drei";
import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../../components/Loader";
// import {Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../../constants";
import HeroCamrea from "../../components/3d/HeroCamrea";
import Setup from "../../components/3d/Setup";

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
  const isSmall = useMediaQuery({ maxWidth: 440 }); // Small screens (e.g., small mobile)
  const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 768 }); // Mobile screens
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 }); // Tablets

  // Additional breakpoints
  const isLargeTablet = useMediaQuery({ minWidth: 1025, maxWidth: 1280 }); // Large tablets, small laptops
  const isLaptop = useMediaQuery({ minWidth: 1281, maxWidth: 1440 }); // Standard laptops
  const isDesktop = useMediaQuery({ minWidth: 1441, maxWidth: 1920 }); // Regular desktops
  const isLargeScreen = useMediaQuery({ minWidth: 1921 }); // Ultra-wide screens

  const sizes = calculateSizes(
    isSmall,
    isMobile,
    isTablet,
    isLargeTablet,
    isLaptop,
    isDesktop,
    isLargeScreen
  );

  const isSmallerDevice = useMemo(
    () => isSmall || isMobile || isTablet,
    [isSmall, isMobile, isTablet]
  );

  return (
    <section
      className="section-pd min-h-screen w-full flex flex-col relative"
      id="home"
    >
      <div className="w-full mx-auto flex flex-col mt-52 ">
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
            <HeroCamrea isSmallerDevice={isSmallerDevice}>
              <Setup
                scale={sizes.setupScale}
                position={sizes.setupPosition}
                rotation={[0, -Math.PI / 2, 0]}
              />
            </HeroCamrea>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
