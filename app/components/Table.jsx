"use client";

import React, { useState } from "react";

const Table = ({ datas }) => {
  const [show, setShow] = useState(false);
  const [clickedColumnIndex, setClickedColumnIndex] = useState(null);

  const showAmount = (index) => {
    setShow(true);
    setClickedColumnIndex(index);
  };

  const maxAmount = Math.max(...datas.map((data) => data.amount));

  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex flex-row items-end justify-evenly">
        {datas &&
          datas.map((data, index) => (
            <div className="flex flex-col items-center gap-2" key={index}>
              {show && clickedColumnIndex === index && (
                <div className="border border-solid bg-[#382314] rounded-md text-white text-[8px] p-1">
                  $ {data.amount}
                </div>
              )}

              <div
                className={`${
                  data.amount === maxAmount ? "bg-[#76b5bc]" : "bg-[#EC775F]"
                } active:bg-[#76b5bc]/30 rounded-sm w-8`}
                style={{ height: `${(data.amount / maxAmount) * 100}px` }}
                onClick={() => showAmount(index)}
              ></div>
              <div key={data.day} className="text-sm text-[#93867B]">
                {data.day}
              </div>
            </div>
          ))}
      </div>
      <div className="border border-solid mx-2 border-[#ec775f]/40"></div>
    </div>
  );
};

export default Table;
