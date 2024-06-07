"use client";

import React from "react";
import Table from "./Table";
import datas from "@/fe-mentor-folders/data";

const Card = () => {
  const totalAmount = () => {
    return "$" + datas.reduce((a, b) => a + b.amount, 0);
  };

  return (
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4  bg-[#FFFAF5] rounded-lg gap-8 p-4">
      <h1 className="text-[#382314] font-bold text-lg">
        Spending - Last 7 days
      </h1>
      <Table datas={datas} />
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-col gap-1 ">
          <p className="text-sm text-[#93867B] ">Total this month</p>
          <span className="text-lg sm:text-2xl  text-[#382314] font-bold">
            {totalAmount()}
          </span>
        </div>
        <div className="flex flex-col self-end text-sm mt-4">
          <span className="text-[#382314] font-bold self-end">+2.4%</span>
          <span className="text-[#93867b]">from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
