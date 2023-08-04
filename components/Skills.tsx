import React from "react";
import Image from "next/image";
import js from "../public/js.png";
import react from "../public/react.png";
import ts from "../public/ts.png";
import node from "../public/node.png";
import html from "../public/html.png";
import css from "../public/css.png";
import { abhaya } from "../utils/font";

const Skills = () => {
  return (
    <div id="skills" className="bg-skillsbg z-20 pb-10">
      <div className="pr:my-15 pt-56 pr:pt-20">
      <h3 className="intro">
        current frontend development skills
      </h3>
      <div className="flex justify-center mb-16">
        <h2 className="text-center text-bold text-3xl md:text-4xl pr:text-5xl text-skillsheading w-11/12 pr:w-8/12">
          <span className={abhaya.className}>
            Developed scalable web applications with the following technologies
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 pr:flex justify-center pr:gap-12">
        <div className="flex flex-col items-center">
          <Image src={js} alt="Javascript" className="w-20 pr:w-28 h-20 pr:h-28" />
          <span className="text-sm pr:text-md font-bold">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={react} alt="Javascript" className="w-20 pr:w-28 h-20 pr:h-28" />
          <span className="text-sm pr:text text-bold">React js</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={ts} alt="Javascript" className="w-20 pr:w-28 h-20 pr:h-28" />
          <span className="text-sm pr:text text-bold">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={node} alt="Javascript" className="w-20 pr:w-28 h-20 pr:h-28" />
          <span className="text-sm pr:text text-bold">Node js</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={html} alt="Javascript" className="w-20 pr:w-28 h-20 pr:h-28" />
          <span className="text-sm pr:text text-bold">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src={css} alt="Javascript" className="w-20 pr:w-28 h-20 pr:h-28" />
          <span className="text-sm pr:text text-bold">Tailwind CSS</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
