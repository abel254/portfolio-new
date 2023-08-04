import React from "react";

const Newsletter = () => {
  return (
    <div id="newsletter" className="bg-skillsbg pt-24">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-3xl md:text-4xl pr:text-5xl font-bold text-skillsheading md:w-7/12 pr:w-7/12">
          Subscribe to my newsletter for updates
        </h2>
        <h4 className="text-center my-7 w-10/12 md:w-6/12 pr:w-5/12 text-skillstext font-bold">
          Sync with my personal porfolio to automatically get updates on latest
          frontend & fullstack projects
        </h4>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center w-10/12 md:w-7/12 pr:w-7/12 mt-4 mb-24 relative">
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-skillstext bg-transparent block focus:outline-none py-2 px-3 rounded-md w-full text-skillsheading"
          />
            <button className="absolute right-0 top-50 border border-mainbutton bg-mainbutton py-2 px-3 pr:px-10 rounded-e-md text-white font-bold text-md hover:bg-hcolor transition ease-linear duration-300">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
