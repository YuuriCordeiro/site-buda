import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center gap-6 bg-white px-5 py-10 sm:px-10 sm:py-8">
      {/* Logo / Título */}
      <div
        className="text-[#2C2C2C] text-center font-normal leading-8 text-xl sm:text-lg"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Chambinho Artes
      </div>

      {/* Redes sociais */}
      <div className="flex gap-6 sm:gap-4" role="group" aria-label="Redes sociais">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-[#2C2C2C] hover:text-[#C2A45D] transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://wa.me/5524999215575"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-[#2C2C2C] hover:text-[#C2A45D] transition-colors"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-[#2C2C2C] hover:text-[#C2A45D] transition-colors"
        >
          <FaFacebook size={24} />
        </a>
      </div>

      {/* Direitos autorais */}
      <div className="text-[#2C2C2C] text-center font-normal leading-7 text-sm sm:text-xs">
        © 2025 Chambinho – Todos os direitos reservados. Criado pelo Niruti!
      </div>
    </footer>
  );
};

export default Footer;
