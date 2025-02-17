import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from "../Modal";
import LanguageSwitcher from "../LanguageSwitcher"; 

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState("Рус");

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header className="w-full flex flex-col justify-between px-12 relative z-10 bg-white">
            <div className="flex items-center justify-between mt-[39px] mb-[40px] h-[40px] text-[#353535]">
                <div className="logo">
                    <Link href="/">
                        <Image src="/Images/logo.png" alt="Лого" width={180} height={39} className="cursor-pointer" />
                    </Link> 
                </div>
                <nav>
                    <ul className="flex space-x-8 text-lg font-medium">
                        <li><Link href="#">Компания</Link></li>
                        <li><Link href="#">Преимущества</Link></li>
                        <li><Link href="#">Проекты</Link></li>
                        <li><Link href="#">Партнёрам</Link></li>
                        <li><Link href="#">Контакты</Link></li>
                    </ul>
                </nav>
                <div className='flex justify-between w-[368px]'>
                    <LanguageSwitcher selectedLang={selectedLang} setSelectedLang={setSelectedLang} />

                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg" onClick={openModal}>
                        Стать партнёром
                    </button>
                </div>
            </div>

            <div className="relative flex flex-col text-white max-w-[1318px] w-full h-[877px] rounded-[32px] mx-auto z-10 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Images/Header/headerBack.jpg')" }}>
                    <div className="absolute z-0 left-0 top-[752px] w-[1526px] h-[496px] bg-orange-600 opacity-70 blur-[200px] rounded-full"></div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-[0.16] rounded-[32px]"></div>
                <div className="relative z-20">
                    <h1 className="text-5xl font-semibold max-w-3xl ml-[80px] mt-[72px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </h1>
                </div>

                <div className="flex mt-8 items-center h-[600px] ml-[80px] relative z-30">
                    <div className="bg-white bg-opacity-50 backdrop-blur-[32px] p-8 rounded-2xl max-w-xl text-[#2F2E36] text-2xl h-[352px] w-full relative z-50">
                        <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="flex bg-white rounded-xl shadow-lg mt-[304px] ml-[455px] h-[48px] items-center">
                        <Image src="/Images/Header/map pin.png" alt="Локация" width={20} height={20} className="ml-[16px]" />
                        <h2 className="text-2xl font-medium ml-4 text-[#2F2E36] mr-[20px]">Astana</h2>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
}
