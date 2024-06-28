import Link from "next/link";
import Sunset from "./icons/Sunset";
const Header = () => {
  const routes = [
    { name: "Attracciones", route: "#attractions" },
    { name: "Sobre nosotros", route: "#about" },
  ];
  return (
    <header id="home" className="bg-[#001845] font-bold text-[24px]">
      <div className="flex justify-between items-center w-full min-[1255px]:w-[1200px] h-[60px] mx-auto text-[#ffff]">
        <Link className="flex justify-center items-center gap-x-2" href="#home">
          <Sunset height="48" stroke="#EB9D34" />
          <h1>Los Angeles Advisor</h1>
        </Link>
        <div className="flex flex-row items-center text-[18px]">
          <nav>
            <ul className=" ">
              {routes.map((route) => (
                <li key={route.name} className="inline-block mx-4">
                  <Link href={route.route}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-row border-l-2 border-[#ffffff2d] px-2 gap-x-2">
            <button className="text-[#EB9D34]">Registrarse</button>
            <button className="primary-button bg-white text-black">
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
