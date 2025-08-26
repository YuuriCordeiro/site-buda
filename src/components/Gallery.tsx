import React, { useState, useRef } from "react";

const Gallery: React.FC = () => {
  const products = [
    {
      name: "Buda não vejo",
      images: Array.from({ length: 8 }, (_, i) => `/imagens/budanaovejo (${i + 2}).png`)
    },
    {
      name: "Mão de Hamsá",
      images: Array.from({ length: 6 }, (_, i) => `/imagens/maohansa${i === 0 ? "" : ` (${i + 1})`}.png`)
    },
    {
      name: "Buda não falo",
      images: Array.from({ length: 9 }, (_, i) => `/imagens/budanaofalo${i === 0 ? "" : ` (${i + 1})`}.png`)
    },
    {
      name: "Ganesha",
      images: ["https://api.builder.io/api/v1/image/assets/TEMP/6ca5020f96ea49577c948d708c8b8e5a55531e0b?width=372"]
    },
    {
      name: "Buda mão no joelho",
      images: ["/imagens/budamaonojelho.png", "/imagens/budamaonojelho (2).png"]
    },
    {
      name: "Buda meditando",
      images: ["/imagens/budameditando.png"]
    }
  ];

  const [currentIndexes, setCurrentIndexes] = useState(products.map(() => 0));
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent, productIndex: number) => {
    if (!isDragging.current || startX.current === null) return;
    const deltaX = e.clientX - startX.current;
    if (Math.abs(deltaX) > 30) {
      const imagesCount = products[productIndex].images.length;
      setCurrentIndexes((prev) => {
        const newIndexes = [...prev];
        if (deltaX > 0) newIndexes[productIndex] = (newIndexes[productIndex] - 1 + imagesCount) % imagesCount;
        else newIndexes[productIndex] = (newIndexes[productIndex] + 1) % imagesCount;
        return newIndexes;
      });
      startX.current = e.clientX; // reset para permitir múltiplos arrastes
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startX.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent, productIndex: number) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - startX.current;
    const imagesCount = products[productIndex].images.length;

    if (deltaX > 30) {
      setCurrentIndexes((prev) => {
        const newIndexes = [...prev];
        newIndexes[productIndex] = (newIndexes[productIndex] - 1 + imagesCount) % imagesCount;
        return newIndexes;
      });
    } else if (deltaX < -30) {
      setCurrentIndexes((prev) => {
        const newIndexes = [...prev];
        newIndexes[productIndex] = (newIndexes[productIndex] + 1) % imagesCount;
        return newIndexes;
      });
    }
    startX.current = null;
  };

  return (
    <section
      id="gallery"
      className="flex flex-col items-center gap-16 mb-[142px] pt-[119px] pb-[60px] px-5 bg-[#F5F0E6]"
      onMouseUp={handleMouseUp}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
        {products.map((product, productIndex) => (
          <article
            key={productIndex}
            className="flex flex-col items-center gap-4 border border-[#CEC8BB] rounded-2xl p-4 bg-white shadow-lg"
          >
            <img
              src={product.images[currentIndexes[productIndex]]}
              alt={`Buda artesanal - ${product.name}`}
              className="w-full max-w-full h-auto sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-2xl cursor-grab select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={(e) => handleMouseMove(e, productIndex)}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(e, productIndex)}
              draggable={false}
            />

            <h3 className="text-[#2C2C2C] text-center text-lg font-normal">
              {product.name}
            </h3>

            {product.images.length > 1 && (
              <div className="flex gap-2 mt-2">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndexes((prev) => {
                      const newIndexes = [...prev];
                      newIndexes[productIndex] = i;
                      return newIndexes;
                    })}
                    className={`w-4 h-4 rounded-full border border-[#CEC8BB] ${
                      currentIndexes[productIndex] === i ? "bg-[#C2A45D]" : "bg-[#F5F0E6]"
                    }`}
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
