import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  return (
  <div>
    <div className="h-[417px] w-[1608px] flex relative z-30 mt-[96px]">
        <div className="w-full mx-auto overflow-hidden relative">
        <div className="absolute bottom-0 left-0 font-medium text-[176px] leading-[180px] text-transparent opacity-100"
               style={{ WebkitTextStroke: "2px #E8E6D9" }}>
            01
          </div>
          <div className="absolute bottom-0 left-[560px] font-medium text-[176px] leading-[180px] text-transparent opacity-100"
               style={{ WebkitTextStroke: "2px #E8E6D9" }}>
            02
          </div>
          <div className="absolute bottom-0 left-[1120px] font-medium text-[176px] leading-[180px] text-transparent opacity-100"
               style={{ WebkitTextStroke: "2px #E8E6D9" }}>
            03
          </div>
      <h2 className="font-golos font-medium text-[56px] leading-[72px] text-[#2F2E36]"> Преимущества</h2>
  
      <div className="flex justify-between mt-[48px] w-full overflow-hidden">
        <div className="relative w-[488px] h-[297px]">
          <p className="font-medium text-[32px] leading-[44px] text-[#898C94]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
  
        </div>
  
        <div className="relative w-[488px] h-[297px]">
          <p className="font-medium text-[32px] leading-[44px] text-[#898C94]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
  
        <div className="relative w-[488px] h-[297px]">
          <p className="font-medium text-[32px] leading-[44px] text-[#898C94]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
  
        </div>
      </div>
    </div>
  </div>
  </div>
  )}