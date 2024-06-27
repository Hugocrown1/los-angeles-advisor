import React from "react";

const Hero = () => {
  return (
    <section className=" bg-[#001845] h-[660px] w-full py-8">
      <div className="relative flex flex-col items-center justify-end  h-full w-[1000px] mx-auto">
        <div className="h-full items-start">
          <h1 className="text-[#EDAE49] text-[64px] font-bold text-center">
            LAS MEJORES ATRACCIONES EN LOS ANGELES
          </h1>
          <p className="text-[#fff] text-[32px] text-center font-semibold px-6">
            Explora experiencias populares Mira lo que les gusta hacer a otros
            viajeros, según sobre valoraciones y número de reservas.
          </p>
        </div>
        <div className="absolute flex flex-row justify-between gap-x-12 w-[1330px] translate-y-48">
          <div className="bg-[#EDAE49] w-[429px] h-[279px] rounded-lg"></div>
          <div className="bg-[#EDAE49] w-[429px] h-[279px] rounded-lg"></div>
          <div className="bg-[#EDAE49] w-[429px] h-[279px] rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
