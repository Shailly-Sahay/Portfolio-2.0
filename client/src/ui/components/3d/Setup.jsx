import { useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Setup = (props) => {
  const screenTxt = useTexture("textures/desk/screen.png");
  const { nodes, materials } = useGLTF("/models/setup.glb");

  const screenMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      map: screenTxt,
      emissiveMap: screenTxt,
      emissive: "white",
      emissiveIntensity: 0.8,
      transparent: false,
      depthWrite: true,
      side: THREE.DoubleSide,
    });
    return material;
  }, [screenTxt]);

  return (
    <>
      {/* <OrbitControls /> */}
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <group scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.desk_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.desk_Material001_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group
            position={[-80.367813, 411.699829, -6.169204]}
            rotation={[0, 0, 0.009822]}
            scale={83.701469}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_Material009_0.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_Material010_0.geometry}
              material={materials["Material.010"]}
            />
          </group>

          <group
            position={[32.251457, 408.20871, 356.421661]}
            rotation={[-Math.PI / 2, -0.019607, 0.509384]}
            scale={[148.044449, 148.044434, 148.044449]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_plastic002_0.geometry}
              material={materials["plastic.002"]}
            />
            {/* Uncomment the screen mesh and apply the texture */}
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_screen002_0.geometry}
              material={screenMaterial}
            />
          </group>
          <group position={[0, 362.192932, -239.549011]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Plane001_Material011_0.geometry}
              material={materials["Material.011"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Plane001_Material018_0.geometry}
              material={materials["Material.018"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Plane001_Material019_0.geometry}
              material={materials["Material.019"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Plane001_Material020_0.geometry}
              material={materials["Material.020"]}
            />
          </group>
          <primitive object={nodes._rootJoint} />
          <primitive object={nodes._rootJoint_1} />

          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pad_Material_0.geometry}
            material={materials.Material}
            position={[45.72213, 259.520996, 6.487684]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[72.671471, 201.143005, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[53.32449, 259.191406, 52.840305]}
            rotation={[Math.PI, 1.509371, -Math.PI]}
            scale={28.780422}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[57.150562, 259.514038, -108.099701]}
            rotation={[0.000003, 1.507221, -0.000003]}
            scale={[24.070965, 26.533901, 24.070965]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[-87.947121, 258.788116, 167.133865]}
            rotation={[0, 0.275237, 0]}
            scale={29.204639}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[-86.372002, 258.788116, -192.780411]}
            rotation={[0, -0.264949, 0]}
            scale={[29.204638, 29.204639, 29.204638]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material014_0.geometry}
            material={materials["Material.014"]}
            position={[-143.565201, 251.395035, 144.563354]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[14.839922, 14.839922, 10.230693]}
          />
        </group>
      </group>
    </>
  );
};

useGLTF.preload("/models/setup.glb");

export default Setup;
