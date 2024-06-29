import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Los Angeles Advisor",
  description:
    "Los Angeles Advisor is a website that provides information about Los Angeles.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth bg-[#EDF2FB]" lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
