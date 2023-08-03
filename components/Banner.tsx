import React from "react";
import Image from "next/image";
import banner from "../public/banner.png";
import mesh from "../public/mesh.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-maintop from-10% to-mainbottom flex-1">
      <div className="mx-16 flex items-center justify-between h-full relative">
        <div className="w-10/12 h-full">
          <h1 className="text-5xl font-bold text-white text-italics mt-20">
            <span className="italic">Meet</span> Abel Muema a developer in Web
            Applications
          </h1>
          <h3 className="text-xl text-white text-bold mt-10 w-7/12">
            A software engineer. From Kenya. Specialized in front-end web
            development. Skills include: JavaScript, React js, Node js.
          </h3>
          <button className="bg-mainbutton px-4 py-2 text-xl text-white text-bold border-0 rounded-md mt-10 hover:bg-white hover:text-mainbutton transition ease-linear duration-200 z-20">
            Continue to Projects
          </button>
          <h4 className="text-white text-bold text-sm mt-2">
            Team player and long-time learner
          </h4>
        </div>
        <div className="h-full flex items-center">
          <Image src={banner} alt="banner" className="rounded-full animate-astronaut z-10"/>
        </div>
        <div>
          <Image src={mesh} alt="mesh" className="absolute bottom-0 right-0 h-52"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
