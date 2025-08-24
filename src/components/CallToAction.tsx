import React from 'react';

const CallToAction: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a encomenda de Buda de gesso.");
    window.open(`https://wa.me/5524999215575?text=${message}`, '_blank');
  };

  return (
    <section
      id="calltoaction"
      className="w-full flex flex-col items-center justify-center gap-10 bg-[#F5F0E6] py-[60px] max-md:py-[50px] max-sm:py-[35px] max-sm:gap-6"
    >
      <h2
        className="w-[658px] text-[#2C2C2C] text-center text-[32px] font-normal leading-10 max-md:w-[90%] max-md:text-[28px] max-md:leading-9 max-sm:text-xl max-sm:leading-7"
      >
        Encomende agora o seu Buda em gesso com acabamento artesanal!
      </h2>
      <button
        onClick={handleWhatsAppClick}
        className="inline-flex items-center gap-2 cursor-pointer transition-all duration-300 bg-[#C2A45D] px-7 py-3 rounded-full max-md:px-5 max-md:py-2.5 max-sm:px-4 max-sm:py-2 
                   hover:bg-[#B8984F] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C2A45D] focus:ring-offset-2"
        aria-label="Fazer encomenda no WhatsApp"
      >
        <span className="text-[#2C2C2C] text-lg font-medium max-sm:text-sm">
          Fazer Encomenda no WhatsApp
        </span>
      </button>
    </section>
  );
};

export default CallToAction;
