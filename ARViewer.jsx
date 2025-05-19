import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function LixeiraModel({ path }) {
  const gltf = useLoader(GLTFLoader, path);
  return <primitive object={gltf.scene} scale={1} />;
}

export default function ARViewer({ modelPath }) {
  return (
    <Canvas shadows camera={{ position: [0, 1, 2], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <Suspense fallback={
        <Html center>
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-opacity-50"></div>
            <p className="mt-2 text-sm text-gray-500">Carregando...</p>
          </div>
        </Html>
      }>
        <LixeiraModel path={modelPath} />
        <Environment preset="warehouse" />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
    </Canvas>
  );
}
