import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className="flex h-[176px] items-center justify-between w-[1620px] mx-auto">
        <figure className="relative w-[295px] h-[116px] bg-black rounded-xl overflow-hidden">
          <Image
            src={"/assets/LA-downtown-banner.webp"}
            alt="LA Downtown"
            fill={true}
            sizes="(min-width: 1120px) 500px"
            className="object-cover object-center"
          />
        </figure>
        <div className="relative flex w-full">
          <span className="text-[#EDAE49] absolute text-[400px]">"</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
