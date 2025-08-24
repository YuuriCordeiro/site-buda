import React from 'react';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a encomenda de Buda de gesso."
    );
    window.open(`https://wa.me/5524999215575?text=${message}`, '_blank');
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[604px] mt-20 pt-[142px] pb-0 px-5 md:px-[220px]">
      
      {/* Texto */}
      <div className="flex-1 max-w-[464px] mb-10 md:mb-0 text-center md:text-left">
        <h1 className="text-[#2C2C2C] text-[48px] font-semibold leading-[60px] mb-4 max-md:text-4xl max-md:leading-[50px] max-sm:text-3xl max-sm:leading-[40px] transition-transform duration-500 ">
          Budas de Gesso por Encomenda
        </h1>
        <p className="text-[#363031] text-xl font-light mb-[32px] max-md:text-lg max-sm:text-base transition-colors duration-300 ">
          Feito por Chambinho
        </p>
        <p className="text-[#363031] text-xl font-light mb-[50px] max-md:text-lg max-sm:text-base transition-colors duration-300 ">
          Tradição artesanal para trazer paz, harmonia e espiritualidade ao seu lar.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out bg-[#C2A45D] px-10 py-5 rounded-[36px] max-sm:px-8 max-sm:py-4 hover:bg-[#B8984F] hover:scale-105"
        >
          <span className="text-[#2C2C2C] text-xl font-normal max-sm:text-base">
            Fazer Pedido no WhatsApp
          </span>
        </button>
      </div>

      {/* Imagem */}
      <div className="flex-1 w-full mt-10 md:mt-0 transition-transform duration-500 ">
        <img
  src="/imagens/budas.png"
  alt="Buda de gesso artesanal"
  className="w-full h-auto object-cover rounded-lg transition-transform duration-500 "
  style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.4))' }}
/>


      </div>

    </section>
  );
};

export default Hero;
