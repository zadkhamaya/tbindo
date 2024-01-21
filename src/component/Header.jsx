"use client";

import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "public/tb-logo-w.svg";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 md:p-6 bg-mainBlue relative">
      <div className="flex-shrink-0">
        <Image
          src={LogoImg}
          width={80}
          height={40}
          className="w-20 h-10 md:w-24 md:h-12"
          alt="Logo"
        />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="w-6 h-6 text-white" />
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="absolute right-4 top-16 mt-1 w-40 bg-white rounded-md shadow-lg md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Products
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      )}

      {/* Regular Menu for Desktop */}
      <nav className="hidden md:flex space-x-4 text-xs md:text-sm font-medium text-white">
        <a href="#" className="hover:underline">
          Products
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
    </div>
  );
};
