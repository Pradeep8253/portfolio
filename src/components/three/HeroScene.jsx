/* eslint-disable */
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Wireframe } from "@react-three/drei";
import * as THREE from "three";

function AbstractGeometry() {
  const meshRef = useRef(null);
  
  // Create a custom material or use a standard one
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#05161a",
    emissive: "#0a1a2a",
    roughness: 0.2,
    metalness: 0.8,
    wireframe: true,
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    
    // Slight movement based on mouse
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    meshRef.current.rotation.x += 0.02 * (targetY - meshRef.current.rotation.x);
    meshRef.current.rotation.y += 0.02 * (targetX - meshRef.current.rotation.y);
  });

  return (
    <Sphere ref={meshRef} args={[2.5, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#3A69F3" 
        wireframe 
        transparent 
        opacity={0.15} 
      />
      <Sphere args={[1.5, 16, 16]}>
        <meshStandardMaterial color="#1E1E1E" roughness={0.4} metalness={0.9} />
      </Sphere>
    </Sphere>
  );
}

function FloatingParticles() {
  const pointsRef = useRef(null);
  
  const particleCount = 200;
  
  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const scl = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
      scl[i] = Math.random() * 2;
    }
    
    return [pos, scl];
  }, []);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
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
          attach="attributes-scale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} // limit DPR for performance
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#3A69F3" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        
        <AbstractGeometry />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
