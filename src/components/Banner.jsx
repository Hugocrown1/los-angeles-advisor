import Image from "next/image";
import { BIZ_UDPGothic } from "next/font/google";

const gothic = BIZ_UDPGothic({ subsets: ["latin"], weight: "400" });

const Banner = () => {
  return (
    <section>
      <div className="flex h-[176px] items-center justify-between w-full min-[1500px]:w-[1500px] mx-auto gap-x-8">
        <figure className="relative w-[295px] h-[116px] rounded-xl overflow-hidden">
          <Image
            src={"/assets/LA-downtown-banner.webp"}
            alt="LA Downtown"
            fill={true}
            sizes="(min-width: 1120px) 500px"
            className="object-cover object-center"
          />
        </figure>

        <div className="flex relative items-center justify-start  w-[50%] h-4 ">
          <span
            className={`${gothic.className} text-[#edae4974] absolute text-[200px] min-[395px]:text-[360px] -translate-x-8 translate-y-8 min-[395px]:translate-y-24 -z-10`}
          >
            "
          </span>
          <p className=" font-semibold italic text-xl min-[395px]:text-2xl min-[1500px]:text-[42px]">
            I am an angel, this is the city where I belong
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
