"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticlesbg"
      options={{
        autoPlay: true,
        background: {
          color: { value: "#111111" },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "repulse" },
            onHover: {
              enable: true,
              mode: "attract",
              parallax: { enable: true, force: 40, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            attract: { distance: 200, duration: 0.4, speed: 0.1 },
            repulse: { distance: 200, duration: 0.4, speed: 1 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 160,
          },
          opacity: {
            random: { enable: true, minimumValue: 0.1 },
            value: { min: 0, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
              startValue: "random",
              minimumValue: 0,
            },
          },
          shape: { type: "circle" },
          size: {
            random: { enable: true, minimumValue: 1 },
            value: { min: 1, max: 3 },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
}
