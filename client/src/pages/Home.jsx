import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import shrek from "/assets/music/shrek.mp3";
import { HomeInfo, Loader, Navigation } from "../ui";
import { Bird, Island, Plane, Sky } from "../ui";
import { setIsHomePage } from "../state/state";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  dispatch(setIsHomePage(true));

  const audioRef = useRef(new Audio(shrek));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <Scene setSceneLoaded={setSceneLoaded} />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#000"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {sceneLoaded && <Navigation />}
      {sceneLoaded && (
        <div className="absolute w-full top-0 left-0 z-10 flex  justify-center section-pd">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      )}

      {sceneLoaded && (
        <div className="absolute bottom-24 left-16">
          <img
            src={
              !isPlayingMusic
                ? "/assets/icons/soundoff.png"
                : "/assets/icons/soundon.png"
            }
            alt="jukebox"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-24 h-24 cursor-pointer object-contain"
          />
        </div>
      )}
    </section>
  );
};

const Scene = ({ setSceneLoaded }) => {
  useEffect(() => {
    setSceneLoaded(true); // Mark the scene as loaded when mounted
  }, []);

  return null;
};

export default Home;
