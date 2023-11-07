import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/backlash.png";

export default function Header() {
  return (
    <header>
      <ul className="w-full flex flex-row justify-between items-center gap-20 sm: flex-col md: flex-col">
        <div className="flex align-middle content-center ml-8 lg:ml-15">
          <Link
            href="/"
            className="cursor-pointer text-white font-bold text-3xl self-center mr-1"
          >
            Backlash
          </Link>
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Picture of the author"
          ></Image>
        </div>
        <div className="flex gap-10 mr-9 lg:mr-19 cursor-pointer">
          <Link
            href="./upload"
            className="cursor-pointer text-white font-bold text-xl"
          >
            Subir Contenido
          </Link>

          <Link
            href="./community"
            className="cursor-pointer text-white font-bold text-xl"
          >
            Peliculas
          </Link>
        </div>
      </ul>
    </header>
  );
}
