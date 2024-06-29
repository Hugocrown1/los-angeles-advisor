import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <section className=" bg-[#001845] h-[500px] min-[500px]:h-[660px] w-full py-8 mb-40 min-[600px]:mb-60">
      <div className="relative flex flex-col items-center justify-end  h-full w-full min-[1000px]:w-[1000px] mx-auto">
        <div className="flex flex-col h-full w-full items-center justify-center translate-y-6 min-[1000px]:justify-start ">
          <h1 className="text-[#EDAE49]  text-[32px] min-[500px]:text-[42px] min-[1000px]:text-[64px] font-bold text-center leading-tight">
            LAS MEJORES ATRACCIONES EN LOS ANGELES
          </h1>
          <p className="text-[#fff] min-[1000px]:text-[32px] text-center font-semibold px-6 leading-tight">
            Explora experiencias populares mira lo que les gusta hacer a otros
            viajeros, según sobre valoraciones y número de reservas.
          </p>
          <Link
            className="primary-button-xl text-white bg-[#EB9D34] mt-8"
            href={"#attractions"}
          >
            Mira las atracciones!
          </Link>
        </div>
        <div className=" flex flex-row justify-between gap-x-2 min-[1330px]:gap-x-12 w-full min-[1330px]:w-[1330px] translate-y-20 min-[500px]:translate-y-32 min-[1000px]:translate-y-48">
          <figure className="relative w-full min-[1330px]:w-[429px] rounded-lg overflow-hidden aspect-[429/279]">
            <Image
              src={"/assets/griffith-observatory.webp"}
              alt="Griffith Observatory"
              fill={true}
              sizes="(min-width: 1120px) 500px"
              className="object-cover object-center"
            />
          </figure>
          <figure className="relative w-full min-[1330px]:w-[429px] rounded-lg overflow-hidden aspect-[429/279]">
            <Image
              src={"/assets/hollywood-sign.webp"}
              alt="Hollywood Sign"
              fill={true}
              sizes="(min-width: 1120px) 500px"
              className="object-cover object-center"
            />
          </figure>
          <figure className="relative w-full min-[1330px]:w-[429px] rounded-lg overflow-hidden aspect-[429/279]">
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
