import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex flex-col sm:flex-row justify-between p-4">
      <div className="flex flex-col sm:flex-row gap-2 my-auto font-semibold text-lg sm:ml-12 md:ml-24">
        <img
          src="https://assets.website-files.com/5ff3926f03b3ba26b7d639cb/600211d2d5625c70ed5ba4e1_abstract-white-badge.png"
          className="w-8 h-8"
          alt="Abstract Logo"
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <a className="text-white" href="#">
            Abstract
          </a>
          <span className="text-white hidden sm:inline">|</span>
          <a className="text-white" href="#">
            Help Center
          </a>
        </div>
      </div>
      <div className="mt-4 sm:mt-0 sm:mr-12 md:mr-48 text-center sm:text-right">
        <button className="bg-gray-800 text-xl rounded border border-gray-400 text-white px-4 py-1.5">
          Submit a request
        </button>
      </div>
    </div>
  );
};

export default Navbar;
