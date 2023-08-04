import React from "react";
import { abhaya } from "../utils/font";
import Image from "next/image";
import amazon from "../public/amazon.png";
import blog from "../public/blog.png";
import drift from "../public/drift.png";

const Projects = () => {
  return (
    <div>
      <div className="mb-32">
        <h3 className="intro mt-10 mb-16">projects developed by abelmuema</h3>
        <div className="flex justify-center mb-16">
          <h2 className="text-center text-bold text-3xl md:text-4xl pr:text-5xl text-skillsheading w-11/12 pr:w-6/12">
            <span className={abhaya.className}>
              Get a 360&deg; view of the developed web applications
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row pr:flex-row justify-center items-center gap-3">
          <a href="#" className="border rounded-full py-2 px-5 border-skillstext hover:bg-skillsintro hover:border-skillsintro hover:text-white transition ease-linear duration-200">Amazon Clone</a>
          <a href="#" className="border rounded-full py-2 px-5 border-skillstext hover:bg-skillsintro hover:border-skillsintro hover:text-white transition ease-linear duration-200">Personal Blog</a>
          <a href="#" className="border rounded-full py-2 px-5 border-skillstext hover:bg-skillsintro hover:border-skillsintro hover:text-white transition ease-linear duration-200">Extreme Drift</a>
        </div>
      </div>

      {/* right project component */}
      <div className="pr:mx-56 mx-5 mb-32">
        <div className="flex flex-col pr:flex-row justify-between items-center mb-20">
          <div>
            <h2 className="font-bold text-5xl pr:text-6xl text-skillsheading text-center pr:text-start">
              <span className={abhaya.className}>Amazon Clone</span>
            </h2>
            <p className="text-skillstext my-5 w-80 text-center pr:text-start">
              Simplified amazon clone which fetches data from the Fake store
              rest API to create the prototype. Adds items to cart and
              calculates the total. Hosted by Vercel.
            </p>
            <a href="#" className="flex items-center link hover:text-hcolor justify-center pr:justify-start mb-5">
              <span className="text-sm mr-2 text-mainbutton">
                Take a Closer Look
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-mainbutton"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  className="arrow"
                />
              </svg>
            </a>
          </div>
          <Image
            src={amazon}
            alt="Amazon Clone"
            className="object-cover w-80 h-96 rounded-md drop-shadow-md"
          />
        </div>

        {/* left project component */}
        <div className="flex flex-col-reverse pr:flex-row justify-between items-center mb-20">
          <Image
            src={blog}
            alt="Amazon Clone"
            className="object-cover w-80 h-96 rounded-md drop-shadow-md"
          />
          <div>
            <h2 className="font-bold text-5xl pr:text-6xl text-skillsheading text-center pr:text-start">
              <span className={abhaya.className}>Personal Blog</span>
            </h2>
            <p className="text-skillstext my-5 w-80 text-center pr:text-start">
              A simple responsive blog site for displaying multiple blog posts. Hosted by Vercel.
            </p>
            <a href="#" className="flex items-center link hover:text-hcolor justify-center pr:justify-start mb-5">
              <span className="text-sm mr-2 text-mainbutton">
                Take a Closer Look
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-mainbutton "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  className="arrow"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col pr:flex-row justify-between items-center mb-20">
          <div>
            <h2 className="font-bold text-5xl pr:text-6xl text-skillsheading text-center pr:text-start">
              <span className={abhaya.className}>Extreme Drift</span>
            </h2>
            <p className="text-skillstext my-5 w-80 text-center pr:text-start">
              A simple responsive site where responsiveness is enhanced using flexbox, grid, and relative units. Hosted by Vercel.
            </p>
            <a href="#" className="flex items-center link pr-10 justify-center pr:justify-start mb-5">
              <span className="text-sm mr-2 text-mainbutton">
                Take a Closer Look
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 stroke-mainbutton"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  className="arrow"
                />
              </svg>
            </a>
          </div>
          <Image
            src={drift}
            alt="Amazon Clone"
            className="object-cover w-80 h-96 rounded-md drop-shadow-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Projects;
