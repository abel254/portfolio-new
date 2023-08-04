import React from "react";
import Image from "next/image";
import banner from "../public/banner.png";
import mesh from "../public/mesh.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-maintop from-10% to-mainbottom flex-1">
      <div className="mx-16 pr:flex items-center justify-between pr:h-full relative">
        <div className="pr:w-10/12 pr:h-full z-20 flex flex-col items-center pr:items-start">
          <h1 className="text-4xl pr:text-5xl font-bold text-white text-italics mt-10 pr:mt-20 text-center pr:text-start">
            <span className="italic">Meet</span> Abel Muema a developer in Web
            Applications
          </h1>
          <h3 className="text-lg pr:text-xl text-white mt-3 pr:mt-10 w-9/12 pr:w-7/12 text-center pr:text-start">
            A software engineer. From Kenya. Specialized in front-end web
            development. Skills include: JavaScript, React js, Node js.
          </h3>
          <button className="bg-mainbutton px-4 py-2 text-lg pr:text-xl text-white text-bold border-0 rounded-md mt-4 pr:mt-10 hover:bg-white hover:text-mainbutton transition ease-linear duration-200 z-20">
            Continue to Projects
          </button>
          <h4 className="text-white text-bold text-sm mt-2 z-20">
            Team player and long-time learner
          </h4>
        </div>
        <div className="pr:h-full flex items-center justify-center -mt-4">
          <Image src={banner} alt="banner" className="rounded-full animate-astronaut z-10 w-72 pr:w-full"/>
        </div>
        <div>
          <Image src={mesh} alt="mesh" className="absolute bottom-0 right-0 h-52 hidden pr:block"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
