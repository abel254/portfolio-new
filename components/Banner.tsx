import React from "react";
import Image from "next/image";
import banner from "../public/banner.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-maintop from-10% to-mainbottom flex-1">
      <div className="mx-16 flex items-center">
        <div className="">
          <h1 className="text-5xl font-bold text-white text-italics pr-20 mt-28">
            <span className="italic">Meet</span> Abel Muema a developer in Web
            Applications
          </h1>
          <h3 className="text-xl text-white text-bold mt-10 w-7/12">
            A software engineer. From Kenya. Specialized in front-end web
            development. Skills include: JavaScript, React js, Node js.
          </h3>
          <button className="bg-mainbutton px-4 py-2 text-xl text-white text-bold border-0 rounded-md mt-10">
            Continue to Projects
          </button>
          <h4 className="text-white text-bold text-sm mt-2">
            Team player and long-time learner
          </h4>
        </div>
        <div className="">
          <Image src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
