import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full mb-[85px] px-5 py-0"
    >
      {/* Container centralizado */}
      <div className="max-w-[1200px] mx-auto flex items-center gap-[49px] max-md:flex-col max-md:text-center max-md:gap-[30px] max-sm:gap-[20px]">
        
        {/* Imagem */}
        <img
          src="/imagens/chambinho.png"
          alt="Alexandre Soares - Chambinho, artesão especializado em budas de gesso"
          className="w-[450px] h-[450px] border shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] object-cover rounded-[350px] border-solid border-[#D9D9D9]
            max-md:w-[300px] max-md:h-[300px] max-md:mb-6
            max-sm:w-[200px] max-sm:h-[200px]"
        />

        {/* Texto */}
        <div className="w-[658px] ml-auto text-black text-2xl font-normal leading-8
            max-md:w-full max-md:text-center max-md:ml-0 max-md:text-xl max-md:leading-7
            max-sm:text-lg max-sm:leading-[26px]"
        >
          <p>
            Sou Alexandre Soares, conhecido como Chambinho. Produzo budas de gesso com moldes, 
            preparados com dedicação e cuidado em cada detalhe do acabamento. Minhas peças são 
            feitas sob encomenda e levam harmonia, beleza e espiritualidade para qualquer ambiente.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
