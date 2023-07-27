import React from "react";
import Image from "next/image";
import github from '../public/github.png'
import linkedin from '../public/linkedin.png'
import twitter from '../public/twitter.png'

const Footer = () => {
  return (
    <div className=" mb-4 pt-10 bg-skillsbg">
      <div className="border-t border-skillstext mx-16 flex justify-between">
        <div className="flex mt-1.5">
          <h2 className="uppercase font-bold text-4xl text-skillsheading mr-4">abel</h2>
          <p className="text-sm text-skillstext font-bold">&copy;Personal Portfolio 2023</p>
        </div>
        <div className="flex gap-5 mt-1.5">
            <a href="#"><Image src={linkedin} alt="linkedin" className="w-9"/></a>
            <a href="#"> <Image src={github} alt="Github" className="w-9"/></a>
            <a href="#"><Image src={twitter} alt="twitter" className="w-9"/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
