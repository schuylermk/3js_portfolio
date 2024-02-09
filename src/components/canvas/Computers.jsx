import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <hemisphereLight intensity={0.05} groundColor="black" />
      <pointLight />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : isTablet ? 0.45 : 0.65}
        position={
          isMobile
            ? [0.5, -0.5, -0.5]
            : isTablet
              ? [-0.75, -1.75, -1.25]
              : [0, -3, -1.05]
        }
        rotation={[-0.0, 0, -0.2]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
    const tabletMediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    const handleMobileMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletMediaQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);
    tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener(
        "change",
        handleMobileMediaQueryChange,
      );
      tabletMediaQuery.removeEventListener(
        "change",
        handleTabletMediaQueryChange,
      );
    };
  }, []);

  return (
    <div className="absolute top-60 h-1/2 w-full border-2 border-yellow-300">
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, -15, 5], fov: 10 }}
        gl={{ preserveDrawingBuffer: true }}
        // className="border-2 border-red-300"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            // autoRotate={true}
            autoRotateSpeed={0.2}
            enableZoom={false}
            // minAzimuthAngle={Math.PI / 1}
            // maxAzimuthAngle={Math.PI / 6}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} isTablet={isTablet} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
