import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const HeroCamrea = ({ children, isSmallerDevices }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 10], 0.25, delta);

    if (!isSmallerDevices)
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y, state.pointer.x / 2, 0],
        0.25,
        delta
      );
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamrea;
