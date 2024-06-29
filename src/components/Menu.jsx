"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import MenuIcon from "./icons/MenuIcon";

const Menu = ({ routes, session }) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        className="flex min-[950px]:hidden p-2 rounded-xl border-[1px] my-auto border-white/70 text-white/70 hover:border-white h-fit w-fit hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(true)}
      >
        <MenuIcon width="24" stroke="#ffff" />
      </button>
      <div
        className={`fixed flex items-end justify-end inset-0  bg-zinc-950/30 transition-transform z-40 w-full ${
          !isMenuOpen && "invisible"
        } `}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <aside
          className={`absolute p-4 flex flex-col w-[250px] min-[320px]:w-[320px] bg-[#EDF2FB] h-full rounded-l-xl overflow-auto  shadow-xl ease-out transition-all text-black ${
            !isMenuOpen && "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="w-full justify-between items-center mb-2 flex">
            <h2 className="text-3xl px-2  font-semibold">MENU</h2>
            <button
              className="rounded-full  hover:bg-gray-400/40 px-2 py-1 text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              X
            </button>
          </header>
          <nav>
            <hr className="w-[95%] mx-auto" />
            <ul onClick={() => setIsMenuOpen(false)}>
              {routes.map((object, index) => (
                <li className="flex my-[2px]" key={index}>
                  <Link
                    className="flex gap-2 w-full px-2 py-1 text-lg font-bold rounded-xl hover:bg-gray-500/30 transition-colors"
                    href={object.route}
                  >
                    <p>{object.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="w-[95%] mx-auto" />
            <ul>
              {!session && (
                <>
                  <li className="flex my-[2px]">
                    <Link
                      className="flex gap-2 w-full px-2 py-1 text-lg font-bold rounded-xl hover:bg-gray-500/30 transition-colors"
                      href={"/registrarse"}
                    >
                      Registrarse
                    </Link>
                  </li>
                  <li className="flex my-[2px]">
                    <Link
                      className="flex gap-2 w-full px-2 py-1 text-lg font-bold rounded-xl hover:bg-gray-500/30 transition-colors"
                      href={"/api/auth/signin?callbackUrl=/"}
                    >
                      Iniciar Sesion
                    </Link>
                  </li>
                </>
              )}

              {session && (
                <>
                  <li className="flex my-[2px]">
                    <span className="flex gap-2 w-full px-2 py-1 text-lg font-bold rounded-xl ">
                      {session.user.name}
                    </span>
                  </li>
                  <li className="flex my-[2px]">
                    <Link
                      className="flex gap-2 w-full px-2 py-1 text-lg font-bold rounded-xl hover:bg-gray-500/30 transition-colors text-red-900"
                      href={"/api/auth/signout?callbackUrl=/"}
                    >
                      Cerrar Sesion
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Menu;
