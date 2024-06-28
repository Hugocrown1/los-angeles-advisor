import Image from "next/image";

const CategoriesDisplay = () => {
  const pictures = [
    {
      src: "/assets/venice-beach-la.webp",
      alt: "Venice Beach",
      category: "Playa",
    },
    {
      src: "/assets/downtown.webp",
      alt: "Los Angeles Ciudad",
      category: "Ciudad",
    },
    {
      src: "/assets/los-angeles-mountain.webp",
      alt: "Los Angeles County",
      category: "Montaña",
    },
    {
      src: "/assets/los-angeles-museum.webp",
      alt: "Los Angeles Museum",
      category: "Museo",
    },
  ];
  return (
    <section id="categories">
      <div className="flex flex-col container-xl text-center items-center mx-auto my-12">
        <h2>Ofrecemos las mejores experiencias</h2>
        <div className="flex flex-row my-8 gap-x-4">
          {pictures.map(({ src, alt, category }) => (
            <figure className="group flex items-center justify-center relative w-[300px] aspect-square border-2 border-white">
              <span className="opacity-0 group-hover:opacity-100 z-20 text-white text-4xl font-semibold absolute transition-all">
                {category}
              </span>
              <div className=" w-full h-full z-10 group-hover:backdrop-blur-sm transition-all"></div>
              <Image
                src={src}
                alt={alt}
                fill={true}
                sizes="(min-width: 1120px) 500px"
                className="object-cover object-center "
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesDisplay;
