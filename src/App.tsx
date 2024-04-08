import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "./Loader";
import Stronghold from "./models/Stronghold";

const App = () => {
  const adjustIslandScreenSize = () => {
    let screenScale = null,
      screenPosition = [0, -6.5, -43],
      rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, isRotation] = adjustIslandScreenSize();
  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent`}
        camera={{
          position: [0, 0, 5],
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <pointLight position={[10, 10, 10]} />
          <directionalLight intensity={5} position={[2, 0, 1]} />
          <ambientLight intensity={3} />
          <Stronghold
            position={islandPosition}
            scale={islandScale}
            rotation={isRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default App;
