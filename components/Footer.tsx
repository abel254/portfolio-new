import React from "react";
import Image from "next/image";
import github from '../public/github.png'
import linkedin from '../public/linkedin.png'
import twitter from '../public/twitter.png'

const Footer = () => {
  return (
    <div id="footer" className="mb-4 bg-skillsbg">
      <div className="border-t border-skillstext mx-8 pr:mx-16 flex flex-col pr:flex-row items-center justify-between">
        <div className="flex pr:mt-3">
          <h2 className="uppercase font-bold text-3xl pr:text-4xl text-skillsheading mr-4">abel</h2>
          <p className="text-sm text-skillstext font-bold">&copy;Personal Portfolio 2023</p>
        </div>
        <div className="flex gap-3 mt-3">
            <a href="https://www.linkedin.com/in/abel-muema-9b1140216/" target="_blank" className="p-2 rounded-full hover:bg-gray-300 transition ease-in duration-300"><Image src={linkedin} alt="linkedin" className="w-7 z-10"/></a>
            <a href="https://github.com/abel254" target="_blank" className="p-2 rounded-full hover:bg-gray-300 transition ease-in duration-300"> <Image src={github} alt="Github" className="w-7"/></a>
            <a href="https://twitter.com/abel26053879" target="_blank" className="p-2 rounded-full hover:bg-gray-300 transition ease-in duration-300"><Image src={twitter} alt="twitter" className="w-7"/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
