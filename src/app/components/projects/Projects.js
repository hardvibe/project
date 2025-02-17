import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-[1312px] h-[877px] mt-24 opacity-44 rounded-[32px] bg-[#E8E6D9]">
      <div className="flex justify-between items-center w-[1216px] ml-12 mt-9">
        <h2 className="font-medium text-[56px] leading-[72px] tracking-[0%]">Проекты</h2>
        <div className="flex justify-between w-[507px]">
          <button className="mt-[9px]">
            <img src="/Images/logo1.png" />
          </button>
          <button className="mt-[11px]">
            <img src="/Images/logo2.png" />
          </button>
          <button>
            <img src="/Images/logo3.png" />
          </button>
        </div>
      </div>
      <div className="relative w-full flex items-center ml-12 mt-8">
        <div className="w-[1216px] h-[1px] bg-[#CCC9B6] opacity-60 rounded-[12px] "></div>
        <div className="w-[138px] h-[4px] opacity-60 bg-[#CCC9B6] absolute left-1/2 -translate-x-1/2"></div>
      </div>
      <div className="grid grid-cols-[480px_394px_288px] gap-4 w-[1216px] h-[576px] mt-12 ml-12">
        <div className="flex flex-col gap-4 ">
          <div className="h-[336px]">
            <iframe
              width="480"
              height="336"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1CTjRhl-FV4oQpTD"
            ></iframe>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="w-[232px] h-[224px] bg-[url('/Images/2.png')] bg-cover bg-center transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal("/Images/2.png")}
            ></div>
            <div
              className="w-[232px] h-[224px] bg-[url('/Images/3.png')] bg-cover bg-center transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => openModal("/Images/3.png")}
            ></div>
          </div>
        </div>
        <div
          className="h-[576px] bg-[url('/Images/4.png')] bg-cover bg-center transition-transform transform hover:scale-105 cursor-pointer"
          onClick={() => openModal("/Images/4.png")}
        ></div>
        <div className="flex flex-col gap-4">
          <div
            className="h-[280px] bg-[url('/Images/5.png')] bg-cover bg-center transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openModal("/Images/5.png")}
          ></div>
          <div
            className="h-[280px] bg-[url('/Images/6.png')] bg-cover bg-center transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openModal("/Images/6.png")}
          ></div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedImage || ""}
              alt="Selected"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
