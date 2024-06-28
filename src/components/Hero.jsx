import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <section className=" bg-[#001845] h-[660px] w-full py-8">
      <div className="relative flex flex-col items-center justify-end  h-full w-[1000px] mx-auto">
        <div className="flex flex-col h-full items-center justify-start">
          <h1 className="text-[#EDAE49] text-[64px] font-bold text-center leading-tight">
            LAS MEJORES ATRACCIONES EN LOS ANGELES
          </h1>
          <p className="text-[#fff] text-[32px] text-center font-semibold px-6 leading-tight">
            Explora experiencias populares Mira lo que les gusta hacer a otros
            viajeros, según sobre valoraciones y número de reservas.
          </p>
          <Link
            className="primary-button-xl text-white bg-[#EB9D34] mt-8"
            href={"#attractions"}
          >
            Mira las atracciones!
          </Link>
        </div>
        <div className="absolute flex flex-row justify-between gap-x-12 w-[1330px] translate-y-48">
          <figure className="relative w-[429px] h-[279px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/griffith-observatory.webp"}
              alt="Griffith Observatory"
              fill={true}
              sizes="(min-width: 1120px) 500px"
              className="object-cover object-center"
            />
          </figure>
          <figure className="relative w-[429px] h-[279px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/hollywood-sign.webp"}
              alt="Hollywood Sign"
              fill={true}
              sizes="(min-width: 1120px) 500px"
              className="object-cover object-center"
            />
          </figure>
          <figure className="relative w-[429px] h-[279px] rounded-lg overflow-hidden">
            <Image
              src={"/assets/santa-monica-pier.webp"}
              alt="Santa Monica Pier"
              fill={true}
              sizes="(min-width: 1120px) 500px"
              className="object-cover object-center"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
