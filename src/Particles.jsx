import React from 'react';
import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadFull } from "tsparticles";

function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: {
          image: " linear-gradient(19deg, #3f78cc 0%, #ffb05c 100%)",
        },
        particles: {
          number: { value: 10, density: { enable: true, value_area: 400 } },
          color: { value: "#ffffff" },
          shape: {
            type: "square",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.40,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 29,
            random: true,
            anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: false,
            distance: 300,
            color: "#ffffff",
            opacity: 0,
            width: 0,
          },
          move: {
            enable: true,
            speed: 0.75,
            direction: "bottom-right",
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 800, line_linked: { opacity: 1 } },
            bubble: {
              distance: 790,
              size: 79,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      }}
    />
    </div>
  );
}

export default AnimatedBackground;