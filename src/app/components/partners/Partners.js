import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
<div className='relative'>
<div className='bg-gradient-to-b from-[#F5F4EE] to-[#EEEBD9] w-[1313px] h-[350px] rounded-[24px] flex justify-between absolute top-[-64px] left-6'>
  <div className='mt-10 ml-12 w-[476px] h-[246px] flex flex-col justify-between text-[#2F2E36]'>
    <h2 className='font-medium text-[56px] leading-[72px] tracking-normal'>Партнёрам</h2>
    <p className="font-normal text-[16px] leading-[24px] tracking-normal">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <div className='flex w-[222px] justify-between items-center'>
      <img src='/Images/check.png'></img>
      <p className='font-medium text-[16px] leading-[24px] tracking-normal underline decoration-solid'>Условия сотрудничества</p>
    </div>
  </div>
  <div className='mt-[50px] w-[640px] h-[236px] flex flex-col justify-between '>
    <p className='text-[#424858] font-medium text-[32px] leading-[44px] tracking-normal'>Excepteur sint occaecat cupidatat 
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className='w-[592px] h-[64px] rounded-[12px] bg-white font-medium text-[24px] leading-[32px] tracking-[0%]'>Стать партнёром</button>
  </div>
</div>
<div className='ml-12 mt-[390px] flex flex-col justify-between w-[1312px] h-[304px]'>
  <h2 className='font-medium text-[56px] leading-[72px] tracking-[0%]'>Готовые решения</h2>
  <div className='flex flex-col justify-between w-[1312px] h-[176px]'>
    <div className='flex justify-between animate-logo1'>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg flex items-center'><p className='mx-6 text-[#2F2E36] font-normal text-[12px] leading-[14.4px] tracking-[0%]'> Лого партнёра (монохром или в цвет) </p></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
    </div>
    <div className='flex justify-between animate-logo2'>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
      <div className='w-48 bg-[#EFEFEF] h-[72px] rounded-lg'></div>
    </div>
  </div>
</div>
</div>
  )}

