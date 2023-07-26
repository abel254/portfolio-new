import React from "react";
import { abhaya } from "../utils/font";

const Projects = () => {
  return (
    <div>
      <div className="mb-32">
        <h3 className="intro mt-10 mb-16">projects developed by abelmuema</h3>
        <div className="flex justify-center mb-16">
          <h2 className="text-center text-bold text-5xl text-skillsheading w-6/12">
            <span className={abhaya.className}>Get a 360&deg; view of the developed web applications</span>
          </h2>
        </div>
        <div className="flex justify-center gap-3">
          <div className="border border-skillstext py-2 px-5 rounded-full">
            <span className="text-skillstext">Amazon Clone</span>
          </div>
          <div className="border border-skillstext py-2 px-5 rounded-full">
            <span className="text-skillstext">Personal Blog</span>
          </div>
          <div className="border border-skillstext py-2 px-5 rounded-full">
            <span className="text-skillstext">Extreme Drift</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
