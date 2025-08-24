import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-between fixed z-[1000] bg-white px-[220px] py-0 left-0 top-0 max-2xl:px-20 max-lg:px-16 max-md:px-10 max-sm:px-5">
      
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
        className={`absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-center transition-all duration-300 ${
          isOpen ? "flex" : "hidden lg:flex"
        } lg:ml-auto`} // <-- adicionamos ml-auto para empurrar o menu para longe do logo
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
    </header>
  );
};

export default Header;
