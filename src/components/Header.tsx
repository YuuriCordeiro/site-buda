import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] fixed top-0 z-[1000] bg-white">
      {/* Container centralizado */}
      <div className="max-w-[1200px] mx-auto w-full px-5 flex items-center justify-between h-full">
        
        {/* Logo / Título */}
        <div
          className="text-[#2C2C2C] font-normal leading-8 text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Chambinho Artes
        </div>

        {/* Botão Hamburger - visível no tablet e mobile */}
        <button
          className="lg:hidden text-3xl font-bold"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Menu de navegação */}
        <nav
          className={`absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-center transition-all duration-300 ${
            isOpen ? "flex" : "hidden lg:flex"
          } lg:ml-auto`}
          role="navigation"
          aria-label="Menu principal"
        >
          <a href="#gallery" className="mx-4 my-2 lg:my-0 hover:text-gray-700">
            Produtos
          </a>
          <a href="#about" className="mx-4 my-2 lg:my-0 hover:text-gray-700">
            Sobre
          </a>
          <a href="#calltoaction" className="mx-4 my-2 lg:my-0 hover:text-gray-700">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
