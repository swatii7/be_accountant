import React from "react";
import CustomButton from "../CustomButton/CustomButton";

export default function Subscription({title, bgColor, price}) {
  const subsArr = [
    "Morbi tempor et",
    "Vehicula dolor fin",
    "Vitae eros fermet",
  ];
  return (
  
      <div className={`${bgColor} text-white text-center rounded-2xl py-[30px] mx-3 mb-10 px-[33px]`}>
        <div>
          {/* header Wrapper */}
          <div className="header pt-5 px-[15px]">
            <h2 className="text-3xl leading-[30px] mb-5">{title}</h2>
            <div className="price mb-1">
              <sup className="font-bold text-xl leading-5 top-[-17px] relative">
                $
              </sup>
              <span className="font-bold text-[45px] leading-[45px] mx-[5px]">
                {price}
              </span>
              <sup className="font-bold text-[15px] leading-[15px] top-[-23px] pb-5">
                /month
              </sup>
              <p className="pt-5">
                <big>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </big>
              </p>
            </div>
          </div>

          {/* insider div wrapper */}
          <div className="py-[10px] px-[30px]">
            <ul></ul>
            {subsArr.map((list, index) => (
              <li className="list-none py-[11px] px-[10px]">{list}</li>
            ))}
          </div>

          {/* footer wrapper */}
          <div className="text-center inline-flex mb-[10px]">
            <CustomButton title='CHOOSE AN OPTION' order='order-2' />
          </div>
        </div>
      </div>
   
  );
}
