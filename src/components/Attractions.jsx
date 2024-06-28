import AttractionsCards from "./AttractionsCards";

const Attractions = () => {
  return (
    <section id="attractions">
      <div className="flex flex-col container-xl text-center items-center mx-auto">
        <h2>Lugares para visitar en LA</h2>
        <AttractionsCards />
      </div>
    </section>
  );
};

export default Attractions;
