import Link from "next/link";
import Sunset from "./icons/Sunset";

import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Menu from "./Menu";
const Header = async () => {
  const session = await getServerSession(options);
  const routes = [
    { name: "Attracciones", route: "#attractions" },
    { name: "Sobre nosotros", route: "#about" },
  ];
  return (
    <header id="home" className="bg-[#001845] font-bold text-[24px]">
      <div className="flex justify-between px-2 items-center w-full min-[1255px]:w-[1200px] h-[60px] mx-auto text-[#ffff]">
        <Link className="flex justify-center items-center gap-x-2" href="#home">
          <Sunset height="48" stroke="#EB9D34" />
          <span>Los Angeles Advisor</span>
        </Link>
        <div className="flex flex-row items-center text-[18px]">
          <nav className="hidden min-[950px]:flex">
            <ul>
              {routes.map((route) => (
                <li key={route.name} className="inline-block mx-4">
                  <Link href={route.route}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className=" hidden min-[950px]:flex flex-row items-center border-l-2 border-[#ffffff2d] px-2 gap-x-2">
            {session ? (
              <>
                <Link
                  href="/api/auth/signout?callbackUrl=/"
                  className="primary-button bg-white text-black"
                >
                  Cerrar Sesion
                </Link>
                <span>{session.user.name}</span>
              </>
            ) : (
              <>
                <Link href={"/registrarse"} className="text-[#EB9D34] px-2">
                  Registrarse
                </Link>
                <Link
                  href="/api/auth/signin?callbackUrl=/"
                  className="primary-button bg-white text-black"
                >
                  Iniciar Sesion
                </Link>
              </>
            )}
          </div>
          <Menu routes={routes} session={session} />
        </div>
      </div>
    </header>
  );
};

export default Header;
