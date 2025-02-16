import { useState } from 'react';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Заполните форму</h2>

        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">ФИО</label>
            <input
              id="fullName"
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Введите ФИО"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Телефон</label>
            <input
              id="phone"
              type="tel"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Введите телефон"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Введите email"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg"
            >
              Отправить
            </button>
            <button
              type="button"
              className="text-gray-500 px-4 py-2"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
