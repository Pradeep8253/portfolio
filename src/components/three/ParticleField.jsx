/* eslint-disable */
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef(null);
  
  const particleCount = 1000;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    const colorA = new THREE.Color("#3A69F3"); // Premium Accent
    const colorB = new THREE.Color("#ffffff");
    
    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 5 + Math.random() * 15;
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      // Mix colors
      const mixedColor = colorA.clone().lerp(colorB, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    
    return [pos, col];
  }, []);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    
    // Slight wave effect based on mouse
    const mouseX = state.pointer.x * 2;
    const mouseY = state.pointer.y * 2;
    
    pointsRef.current.position.x += (mouseX - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (mouseY - pointsRef.current.position.y) * 0.05;
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 1.5]}>
        <Particles />
      </Canvas>
    </div>
  );
}
