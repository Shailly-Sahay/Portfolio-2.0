import { Suspense } from "react";
import SectionHeader from "../../components/SectionHeader";
import { myProjects } from "../../../constants";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import Loader from "../../components/Loader";
import Laptop from "../../components/3d/Laptop";
import { Leva, useControls } from "leva";

const Projects = () => {
  const currentProject = myProjects[0];

  const controls = useControls("HackerRoom", {
    positionX: {
      value: 2.5,
      min: -30,
      max: 30,
    },
    positionY: {
      value: 2.5,
      min: -30,
      max: 30,
    },
    positionZ: {
      value: 2.5,
      min: -30,
      max: 30,
    },
    rotationX: {
      value: 2.5,
      min: -30,
      max: 30,
    },
    rotationY: {
      value: 2.5,
      min: -30,
      max: 30,
    },
    rotationZ: {
      value: 2.5,
      min: -30,
      max: 30,
    },
    scale: { value: 0, min: -10, max: 10 },
  });

  return (
    <section className="section-pd w-full flex flex-col relative">
      <SectionHeader text="My work" />
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full h-[96rem]">
        <div className="flex flex-col gap-5 relative">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-whiteq text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="text-whiteq text-2xl font-semibold animatedText">
              {currentProject.desc}
            </p>
            <p className="text-whiteq text-2xl font-semibold animatedText">
              {currentProject.subdesc}
            </p>
          </div>
        </div>

        <div className="border border-black-300  rounded-lg h-[1000px] md:h-full">
          {/* <Leva /> */}
          <Canvas>
            <ambientLight intensity={10} />
            <directionalLight position={[0, 0, 10]} />
            <Center>
              <Suspense fallback={<Loader />}>
                <Laptop />
              </Suspense>
            </Center>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
