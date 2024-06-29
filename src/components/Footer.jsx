import Sunset from "./icons/Sunset";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#001845]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              className="flex justify-center items-center gap-x-2"
              href="#home"
            >
              <Sunset height="48" stroke="#EB9D34" />
              <span className="text-[#ffff] text-[24px] font-bold">
                Los Angeles Advisor
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Recursos
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <Link href="https://nextjs.org/" className="hover:underline">
                    Next.JS
                  </Link>
                </li>
                <li>
                  <Link href="https://react.dev/" className="hover:underline">
                    React
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Siguenos
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <Link
                    href="https://www.facebook.com/turing.mx"
                    className="hover:underline "
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/turing-ia/"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Legal
              </h2>
              <ul className="text-gray-400  font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Politica de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terminos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2024{" "}
            <Link href="https://www.turing-ia.com/" className="hover:underline">
              Los Angeles Advisor™
            </Link>
            . Casi Todos los Derechos Reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
