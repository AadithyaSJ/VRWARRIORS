import React from "react";

const technologies = [
  {
    name: "Nuclear Explosion Intro",
    description: "360 Degree Nuclear Explosion Using Unreal Engine",
    videoSrc: "/videos/1_NuclearIntro.mp4", 
  },
  {
    name: "Unreal Engine",
    description: "Unreal Engine is a powerful 3D creation tool for high-fidelity graphics.",
    videoSrc: "/videos/2_NuclearExplosion.mp4", 
  },
  {
    name: "Unity",
    description: "Unity is a versatile game engine used for creating 2D and 3D applications.",
    videoSrc: "/videos/3-car-simulator-trial_jrDRuVGa.mp4", 
  },
  {
    name: "Blender",
    description: "Blender is a free and open-source 3D creation suite.",
    videoSrc: "/videos/4_Leap Sensor Game Using UE5.mp4", 
  },
  {
    name: "Leap Motion",
    description: "Leap Motion is a hand-tracking sensor for natural interaction in VR.",
    videoSrc: "/videos/5_Bike Assembly using UE5 Sequence.mp4",
  },
  {
    name: "Logitech",
    description: "Logitech devices like steering wheels enhance VR simulators.",
    videoSrc: "/videos/6_Bike Assembly VR UE5.mp4", 
  },
  {
    name: "Meta Quest",
    description: "Meta Quest is a standalone VR headset for interactive experiences.",
    videoSrc: "/videos/7.HTV_VIVE_TRACKER.mp4", 
  },
  {
    name: "Stream VR",
    description: "Stream VR is a platform for immersive gaming with VR devices.",
    videoSrc: "/videos/8_TVS_Grip.mp4",
  },
  
];

const TechnologiesWithLocalVideos = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-8">OUR PROJECTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-4">{tech.name}</h2>
            <p className="text-gray-700 mb-4 text-center">{tech.description}</p>
            <div className="w-full h-48 overflow-hidden rounded-md">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                src={tech.videoSrc}
              >
                
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesWithLocalVideos;
