import Image from "next/image";
import Star from "./icons/Star";
import Link from "next/link";

const AttractionCard = ({ attraction }) => {
  const { name, rating, description, category, image, usersReviewed, _id } =
    attraction;

  return (
    <article
      key={_id}
      className="w-full border-[1px] rounded-lg px-2 py-2 border-[#0018454f] text-left"
    >
      <Link href={"#attractions"}>
        <figure className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="Attraction"
            fill={true}
            sizes="(min-width: 1120px) 500px"
            className="object-cover object-center"
          />
        </figure>
        <h3 className=" text-xl font-bold mt-2 text-pretty">{name}</h3>
        <div className="flex flex-row items-center gap-x-1">
          <Star width="24" stroke="#EB9D34" fill="#EB9D34" />
          <span className="text-xl font-semibold">{rating}</span>
          <span className="text-sm text-[#7A7A7A] font-semibold">
            ({usersReviewed} usuarios puntuaron)
          </span>
        </div>
        <div className="rounded-full border-2 border-[#45454579] bg-[#E3E3E3] text-[#8A8A8A] text-sm w-fit px-2 font-semibold">
          {category}
        </div>
        <p className="text-pretty w-full min-h-[85px] max-w-[382px] leading-tight mt-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          {description}
        </p>
        <div className="primary-button bg-[#001845] text-white w-full flex items-center justify-center mt-4">
          Más información
        </div>
      </Link>
    </article>
  );
};

export default AttractionCard;
