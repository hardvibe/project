import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Opportunities() {
  return (
    <div className="container w-[1248px]">
    <h2 className="font-medium text-[56px] leading-[64px] text-[#2F2E36]">
    Наши возможности
    </h2>
    <div className="flex justify-between w-[1248px] mt-12">
    
      <div className="w-[640px] ">
          <p className="font-medium text-[32px] leading-[44px] text-[#424858]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="font-medium text-[32px] leading-[44px] text-[#424858] mt-6">
            Exceptetur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>

        <div className="w-[576px] ml-8">
          <p className="font-medium text-[16px] leading-[24px] text-[#2F2E36]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

        <div className="mt-11 flex justify-between w-[360px]">
          <div className="w-[164px] h-[164px] bg-gray-100 rounded-full"></div>
          <div className="w-[164px] h-[164px] bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
  )}