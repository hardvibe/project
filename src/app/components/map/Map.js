import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div   className="w-[1318px] h-[750px] bg-cover bg-center mt-32" style={{ backgroundImage: "url('/Images/Map.svg')" }}>
    <div>
      <h2 className="font-medium text-[56px] leading-[64px] text-[#2F2E36] mt-4 ml-[59px] w-64">Компания в цифрах</h2>
    </div>
    <div className="grid grid-cols-2 gap-x-20 gap-y-10 text-left ml-[59px] mt-16 w-[522px] h-[388px]">
      <div>
        <p className="font-medium text-[96px] leading-[114px] tracking-[0%] text-[#F56011]">18</p>
        <p className="font-medium text-[24px] leading-[32px] tracking-[0%] text-[#2F2E36]">Магазинов <br />в сети</p>
      </div>
      <div>
      <p className="font-medium text-[96px] leading-[114px] tracking-[0%] text-[#F56011]">3</p>
      <p className="font-medium text-[24px] leading-[32px] tracking-[0%] text-[#2F2E36]">Собственных <br />бренда</p>
      </div>
      <div>
      <p className="font-medium text-[96px] leading-[114px] tracking-[0%] text-[#F56011]">12</p>
      <p className="font-medium text-[24px] leading-[32px] tracking-[0%] text-[#2F2E36]">Объектов <br />недвижимости</p>
      </div>
      <div>
      <p className="font-medium text-[96px] leading-[114px] tracking-[0%] text-[#F56011]">27</p>
      <p className="font-medium text-[24px] leading-[32px] tracking-[0%] text-[#2F2E36]">Лет на рынке<br />Казахстана</p>
      </div>
    </div>

  </div>
  )}