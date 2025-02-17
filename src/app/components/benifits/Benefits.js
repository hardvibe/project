import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  return (
  <div>
    <div className="h-[417px] w-[1360px] flex ml-12 mt-[96px]">
        <div className="w-full mx-auto overflow-hidden relative">
          <h2 className="font-medium text-[56px] leading-[72px] text-[#2F2E36]"> Преимущества</h2>

          <div className="overflow-x-auto overflow-y-hidden w-full mt-6 scrollbar-thin scrollbar-thumb-[#4A90E2] scrollbar-track-gray-300 scrollbar-h-1">
            <div className="flex justify-between w-[1608px]">
              <div className="relative w-[488px] h-[297px] flex-shrink-0">
                <p className="font-medium text-[32px] leading-[44px] text-[#898C94] relative z-20">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="absolute bottom-0 left-0 font-medium text-[176px] leading-[180px] text-transparent opacity-100"
                    style={{ WebkitTextStroke: "2px #E8E6D9" }}>
                  01
                </div>
              </div>

              <div className="relative w-[488px] h-[297px] flex-shrink-0">
                <p className="font-medium text-[32px] leading-[44px] text-[#898C94] relative z-20">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="absolute bottom-0 font-medium text-[176px] leading-[180px] text-transparent opacity-100 z-0"
                    style={{ WebkitTextStroke: "2px #E8E6D9" }}>
                  02
                </div>
              </div>

              <div className="relative w-[488px] h-[297px] flex-shrink-0">
                <p className="font-medium text-[32px] leading-[44px] text-[#898C94] relative z-20">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className="absolute bottom-0 font-medium text-[176px] leading-[180px] text-transparent opacity-100"
                    style={{ WebkitTextStroke: "2px #E8E6D9" }}>
                  03
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  </div>
  )}