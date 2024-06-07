import React from "react";

const Header = () => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-[#EC775F] border border-solid rounded-lg flex justify-between items-center p-4">
      <div>
        <h1 className="text-sm text-gray-100">My balance</h1>
        <span className="font-bold text-lg text-white">$921.48</span>
      </div>
      <div className="flex mr-4">
        <div className="relative z-10 border-2 border-solid rounded-full w-8 h-8"></div>
        <div className="absolute z-0 ml-3 bg-black/70 rounded-full w-8 h-8"></div>
      </div>
    </div>
  );
};

export default Header;
