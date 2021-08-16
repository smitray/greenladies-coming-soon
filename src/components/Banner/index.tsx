import React from 'react';

import Particles from 'react-tsparticles';

const Banner = () => (
  <div className="relative">
    <Particles
      id="particles"
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab',
            },
            onclick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#e5e5e5',
          },
          shape: {
            type: 'edge',
            stroke: {
              width: 0,
              color: '#A67F8E',
            },
            polygon: {
              nb_sides: 8,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#457b9d',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
    />
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="container flex items-center justify-center h-full mx-auto">
        <div className="bannerTitle">
          <h1 className="font-extrabold text-gray-100 uppercase text-8xl">
            Green Ladies
          </h1>
          <p className="pl-1 mt-3 text-2xl font-bold text-center text-gray-200 uppercase">
            Launching soon
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
