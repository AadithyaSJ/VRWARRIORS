import React from "react";
import UELogo from '../assets/UE5.png'
import BlenderLogo from '../assets/Blende.png'
import UnityLogo from '../assets/Unity.png'
import LeapLogo from '../assets/Leap.png'
import LogitechLogo from '../assets/logitech.png'
import VRLogo from '../assets/VR.png'
import StreamLogo from '../assets/StreamVRpng.png'
import MetaLogo from '../assets/meta-quest.jpg'

const technologies = [
  { name: "VR HMD", src: VRLogo },
  { name: "Unreal Engine", src: UELogo },
  { name: "Unity", src: UnityLogo},
  { name: "Blender", src: BlenderLogo },
  { name: "Leap", src:LeapLogo},
  { name: "Logitech", src: LogitechLogo },
  { name: "Meta Quest", src: MetaLogo },
  { name: "Stream VR", src: StreamLogo }

];

const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-16">Technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 cursor-pointer overflow-hidden"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className="w-full h-full object-contain transition-transform duration-300 transform group-hover:scale-110"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center text-sm p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
