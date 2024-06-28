import Heart from "./icons/Heart";
import Star from "./icons/Star";
import Writing from "./icons/Writing";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center mx-auto max-w-[1250px] text-center ">
        <h2>Tenemos las mejores recomendaciones</h2>
        <div className="flex flex-row mt-8 gap-x-4">
          <div className="flex flex-col items-center justify-center max-w-[355px]">
            <div className="flex items-center justify-center rounded-full w-48 p-4 bg-[#EB9D34] aspect-square mb-8">
              <Star width="100" fill="#001845" />
            </div>

            <h3>Los mejores puntos</h3>
            <p className="text-lg mt-2 text-pretty">
              Contamos con los mejores puntos turísticos de la ciudad.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[355px] ">
            <div className="flex items-center justify-center rounded-full w-64 p-4 bg-[#EB9D34] aspect-square mb-2">
              <Writing width="120" stroke="#001845" />
            </div>
            <h3>Escritas por expertos</h3>

            <p className="text-lg mt-2">
              Contamos con reseñas escritas por expertos en la materia.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[355px]">
            <div className="flex items-center justify-center rounded-full w-48 p-4 bg-[#EB9D34] aspect-square mb-8">
              <Heart width="100" fill="#001845" />
            </div>
            <h3>Hecho con amor</h3>

            <p className="text-lg mt-2 text-pretty ">
              Todas nuestras recomendaciones son hechas con amor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
