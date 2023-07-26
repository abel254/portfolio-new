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
          <h2 className="text-center text-bold text-5xl text-skillsheading w-6/12">
            <span className={abhaya.className}>
              Get a 360&deg; view of the developed web applications
            </span>
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

      {/* right project component */}
      <div className="mx-56 mb-32">
        <div className="flex justify-between items-center mb-20">
          <div>
            <h2 className="font-bold text-6xl text-skillsheading">
              <span className={abhaya.className}>Amazon Clone</span>
            </h2>
            <p className="text-skillstext my-5 w-80 ">
              Simplified amazon clone which fetches data from the Fake store
              rest API to create the prototype. Adds items to cart and
              calculates the total. Hosted by Vercel.
            </p>
            <a href="#" className="flex items-center">
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
                />
              </svg>
            </a>
          </div>
          <Image
            src={amazon}
            alt="Amazon Clone"
            className="object-cover w-5/12 h-96 rounded-md drop-shadow-md"
          />
        </div>

        {/* left project component */}
        <div className="flex justify-between items-center mb-20">
          <Image
            src={blog}
            alt="Amazon Clone"
            className="object-cover w-5/12 h-96 rounded-md drop-shadow-md"
          />
          <div>
            <h2 className="font-bold text-6xl text-skillsheading">
              <span className={abhaya.className}>Personal Blog</span>
            </h2>
            <p className="text-skillstext my-5 w-80 ">
              A simple responsive blog site for displaying multiple blog posts. Hosted by Vercel.
            </p>
            <a href="#" className="flex items-center">
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
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center mb-20">
          <div>
            <h2 className="font-bold text-6xl text-skillsheading">
              <span className={abhaya.className}>Extreme Drift</span>
            </h2>
            <p className="text-skillstext my-5 w-80 ">
              A simple responsive site where responsiveness is enhanced using . Hosted by Vercel.
            </p>
            <a href="#" className="flex items-center">
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
                />
              </svg>
            </a>
          </div>
          <Image
            src={drift}
            alt="Amazon Clone"
            className="object-cover w-5/12 h-96 rounded-md drop-shadow-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Projects;
