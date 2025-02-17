import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTopButton from '../ScrollToTopButton';

export default function Footer() {
  return (
<footer className="bg-[#FAFAFB] h-[428px] mt-32 w-full">
  <div className="w-[1312px] h-[324px] mx-auto mt-14 relative">
    <section className="w-[775px] h-[55px] flex">
      <Link href="/">
        <Image src="/Images/logo.png" alt="Лого" width={180} height={39} className="cursor-pointer" />
      </Link>

      <nav className="flex">
        <p className="text-[14px] font-normal leading-[20px] text-[#A0A3AB] mt-[35px] ml-[156px] w-[71px]">Приёмная</p>
        <p className="text-[14px] font-normal leading-[20px] text-[#A0A3AB] mt-[35px] ml-[265px] w-[103px]">Головной офис</p>
      </nav>
    </section>

    <address className="flex w-[1068px] h-16 mt-[10px] items-center not-italic">
      <p className="text-[14px] font-normal leading-[20px] text-[#2F2E36] w-[287px]">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="font-medium text-[24px] leading-[32px] text-[#424858] ml-[49px] w-[220px]">
        +7 (7212) 00-00-00 <br /> +7 (701) 000-00-00
      </p>
      <p className="font-medium text-[24px] leading-[32px] text-[#424858] ml-[116px] w-[396px]">
        Республика Казахстан, <br /> г. Караганда,​ улица Ермекова, 52
      </p>
    </address>

    <hr className="w-[976px] h-[1px] bg-[#E3E9F1] mt-10 ml-[336px]" />

    <section className="flex items-center w-[983px] h-[32px]">
      <div className="flex space-x-3 w-24">
        <a href="#" aria-label="WhatsApp">
          <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src="/images/ig.svg" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#" aria-label="Facebook">
          <img src="/images/fb.svg" alt="Facebook" className="w-6 h-6" />
        </a>
      </div>

      <a href="mailto:info@domain.kz" className="font-medium text-[24px] leading-[32px] underline ml-[240px] w-[186px]">
        info@domain.kz
      </a>

      <a href="#" className="flex items-center font-medium text-[24px] leading-[32px] underline ml-[150px]">
        <img src="/Images/mail.svg" alt="Mail" />
        <p className="ml-3">Форма обратной связи</p>
      </a>
    </section>

    <section className="flex w-[1312px] mt-16">
      <p className="font-normal text-[14px] leading-[20px] text-[#A0A3AB] w-[264px]">
        © 2023 Сеть супермаркетов «Южный»
      </p>

      <nav className="flex justify-between w-[661px] font-normal text-[14px] leading-[20px] text-[#424858] ml-[72px]">
        <Link href="#">Публичная оферта</Link>
        <Link href="#">Согласие на сбор и обработку данных</Link>
        <Link href="#">Политика конфиденциальности</Link>
      </nav>

      <p className="font-normal text-[14px] leading-[20px] text-[#4A4D55] ml-[196px]">
        Сделано в{" "}
        <a href="https://pit.red" target="_blank" rel="noopener noreferrer" className="underline">
          pit.red
        </a>
      </p>
    </section>
  </div>
  <ScrollToTopButton />
</footer>

  )}
