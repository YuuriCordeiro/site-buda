import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: "/imagens/mao.svg",
      text: "Uma peça artesanal que carrega história e significado.",
    },
    {
      icon: "/imagens/peace.svg",
      text: "Arte em gesso que transmite paz e harmonia ao seu espaço.",
    },
    {
      icon: "/imagens/mao2.svg",
      text: "Mais do que decoração, uma peça que inspira equilíbrio interior.",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center mt-16 md:mt-20 lg:mt-24 px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-[878px] bg-[#C2A45D] px-6 py-6 rounded-[80px] shadow-xl md:px-12 md:py-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2 flex-1 text-center">
              <img
                src={feature.icon}
                alt={`Ícone ${index + 1}`}
                className="w-9 h-9"
              />
              <p className="text-[#363031] text-base font-normal">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
