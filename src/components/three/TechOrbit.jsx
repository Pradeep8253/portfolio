/* eslint-disable */
"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Torus } from "@react-three/drei";
import * as THREE from "three";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

const orbitTechs = [
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
];

function OrbitingNodes({ overlayRef }) {
  const groupRef = useRef(null);
  
  const nodes = useMemo(() => {
    return orbitTechs.map((tech, i) => {
      const angle = (i / orbitTechs.length) * Math.PI * 2;
      const radius = 4.2;
      return {
        ...tech,
        initialPos: new THREE.Vector3(
          Math.cos(angle) * radius, 
          0, 
          Math.sin(angle) * radius
        )
      };
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Smooth rotation of the entire orbital system
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    // Add a beautiful permanent tilt to simulate a 3D solar system
    groupRef.current.rotation.x = 0.5;
    groupRef.current.rotation.z = -0.1;
    
    // Project 3D positions to 2D screen coordinates for the HTML overlay
    nodes.forEach((node, i) => {
      const vector = node.initialPos.clone();
      // Apply the group's current rotation/transform
      vector.applyMatrix4(groupRef.current.matrixWorld);
      // Project to 2D normalized device coordinates (NDC)
      vector.project(state.camera);
      
      const el = overlayRef.current[i];
      if (el) {
        // Convert NDC to percentage based coordinates for CSS
        const x = (vector.x * 0.5 + 0.5) * 100;
        const y = (-(vector.y * 0.5) + 0.5) * 100;
        
        el.style.left = `${x}%`;
        el.style.top = `${y}%`;
        
        // Depth sorting and fading based on Z axis
        el.style.zIndex = vector.z < 0.99 ? 10 : 0;
        el.style.opacity = vector.z < 0.99 ? 1 : 0.1;
        // Center the parent div exactly over the 3D coordinate
        el.style.transform = `translate(-50%, -50%) scale(${vector.z < 0.99 ? 1 : 0.7})`;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Outer Holographic Core */}
      <Icosahedron args={[1.5, 2]}>
        <meshBasicMaterial color="#3A69F3" wireframe transparent opacity={0.15} />
      </Icosahedron>
      
      {/* Inner Solid Core */}
      <Icosahedron args={[0.8, 1]}>
        <meshBasicMaterial color="#111111" wireframe transparent opacity={0.5} />
      </Icosahedron>

      {/* Orbital Path Ring */}
      <Torus args={[4.2, 0.005, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#3A69F3" transparent opacity={0.2} />
      </Torus>
      
      {/* Orbiting Tech Nodes */}
      {nodes.map((node, i) => (
        <group key={i} position={node.initialPos.toArray()}>
          {/* Glowing aura of the sphere */}
          <mesh scale={2.2}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function TechOrbit() {
  const overlayRef = useRef([]);

  return (
    <div className="w-full h-[400px] lg:h-[600px] relative pointer-events-none">
      
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
        <OrbitingNodes overlayRef={overlayRef} />
      </Canvas>
      
      {/* 2D HTML Overlay rendered outside the Canvas */}
      {orbitTechs.map((tech, i) => {
        const Icon = tech.icon;
        return (
        <div
          key={i}
          ref={(el) => (overlayRef.current[i] = el)}
          className="absolute transition-all duration-75 ease-linear"
          style={{ 
            left: '-100%', 
            top: '-100%', 
          }}
        >
          {/* Logo Circle centered exactly on the 3D coordinate */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-premium-black/90 border border-white/10 backdrop-blur-md shadow-xl z-10"
            style={{ boxShadow: `0 0 20px ${tech.color}40` }}
          >
            <Icon className="w-5 h-5" style={{ color: tech.color }} />
          </div>
          
          {/* Connecting Line extending to the right */}
          <div className="absolute top-1/2 left-[20px] w-[25px] h-[1px] bg-premium-border/80 -translate-y-1/2"></div>
          
          {/* Text Label Box */}
          <div className="absolute top-1/2 left-[45px] -translate-y-1/2 bg-premium-black/60 border border-premium-accent/30 backdrop-blur-md px-3 py-1.5 rounded shadow-[0_0_15px_rgba(58,105,243,0.15)] text-white text-xs font-mono font-bold tracking-widest whitespace-nowrap">
            {tech.name}
          </div>
        </div>
      )})}
      
    </div>
  );
}
