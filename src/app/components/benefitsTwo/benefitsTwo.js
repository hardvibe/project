import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BenefitsTwo() {
  return (
<div className='w-full h-[728px] mt-24 bg-[#254BC8] flex justify-center'>
  <div className="w-[1408px] relative overflow-hidden">
    <div className="w-[1408px] mt-20">
      <h2 className="font-medium text-[56px] leading-[72px] tracking-[0%] text-[#FFF] ml-12">
        Преимущества
      </h2>
      <div className="w-[1408px] relative overflow-hidden mt-16">
        <div className="overflow-x-auto w-full mt-6 scrollbar-thin scrollbar-thumb-[#4A90E2] scrollbar-track-gray-300 scrollbar-h-1">
          <div className="flex gap-6 w-[1736px] bg-[#254BC8] rounded-lg relative z-10 ml-12 p-4">
            
            <div className="w-[416px] h-[296px] bg-white pt-9 rounded-[24px] flex-shrink-0">
              <div className="mb-6 ml-10">
                <img src="/Images/shield.png" alt="" className="w-16 h-16" />
              </div>
              <p className="font-normal text-[24px] leading-[32px] tracking-[0%] ml-10 mb-11 w-[336px]">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="w-[416px] h-[360px] bg-white pt-9 rounded-[24px] flex-shrink-0">
              <div className="mb-6 ml-10">
                <img src="/Images/globe.png" alt="" className="w-16 h-16" />
              </div>
              <p className="font-normal text-[24px] leading-[32px] tracking-[0%] ml-10 mb-11 w-[336px]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, sunt in culpa qui officia deserunt.
              </p>
            </div>

            <div className="w-[416px] h-[296px] bg-white pt-9 rounded-[24px] flex-shrink-0">
              <div className="mb-6 ml-10">
                <img src="/Images/smile.png" alt="" className="w-16 h-16" />
              </div>
              <p className="font-normal text-[24px] leading-[32px] tracking-[0%] ml-10 mb-11 w-[336px]">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className="w-[416px] h-[296px] bg-white pt-9 rounded-[24px] flex-shrink-0">
              <div className="mb-6 ml-10">
                <img src="/Images/shield.png" alt="" className="w-16 h-16" />
              </div>
              <p className="font-normal text-[24px] leading-[32px] tracking-[0%] ml-10 mb-11 w-[336px]">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )}

