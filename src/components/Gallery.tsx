import React from 'react';

const Gallery: React.FC = () => {
  const products = [
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d92dcc3e272a6da34b93dbcf672f7b896b6a3b78?width=372",
      name: "Mão de Hamsá"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/53db94d9fc96e143b6f2bfde97394a4deefb49eb?width=372",
      name: "Buda em pé"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6ca5020f96ea49577c948d708c8b8e5a55531e0b?width=372",
      name: "Ganesha"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cb8b6a6a7c347362a3b77db5495dd5dddadeeea4?width=372",
      name: "Buda sentado"
    },
    {
      image: "https://api.builder.io/api/v1/image/assets/TEMP/06762dc2f15df0fc6ea07d30f73ccc61809499dd?width=372",
      name: "Buda mão no joelho"
    }
  ];

  return (
    <section
      id="gallery"
      className="flex flex-col items-center gap-[78px] mb-[142px] pt-[119px] pb-[60px] px-[148px] bg-[#F5F0E6] max-md:gap-10 max-md:pt-20 max-md:pb-20 max-md:px-10 max-sm:gap-[30px] max-sm:pt-[60px] max-sm:pb-[40px] max-sm:px-5"
    >
      <div className="flex flex-wrap justify-center gap-[78px] max-md:gap-10 max-sm:gap-[30px] 
                      max-md:flex-nowrap max-md:overflow-x-auto max-md:scrollbar-thin max-md:scrollbar-thumb-gray-400">
        {products.map((product, index) => (
          <article key={index} className="flex flex-col items-center gap-5 flex-shrink-0">
            <img
              src={product.image}
              alt={`Buda artesanal - ${product.name}`}
              className="w-[186px] h-[246px] object-cover rounded-2xl max-sm:w-[150px] max-sm:h-[200px] hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-[#2C2C2C] text-center text-base font-normal font-sans">
              {product.name}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
