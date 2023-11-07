import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/backlash.png";

export default function Header() {
  return (
    <header>
      <ul className="md:w-full md:flex md:flex-row md:justify-between md:tems-center md:gap-20 sm:flex-col sm:justify-items-center w-full flex flex-col">
        <div className="md:flex md:align-middle md:content-center md:ml-8 md:ml-15 sm:flex sm:flex-row sm:content-center sm:align-middle sm:justify-center flex align-middle justify-center">
          <Link
            href="/"
            className="cursor-pointer text-white font-bold md:text-3xl md:self-center md:mr-1 sm:m-0 sm:text-xl sm:self-center sm:mr-1 text-2xl self-center"
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
        <div className="md:flex md:items-center md:gap-10 md:mr-9 lg:mr-19 cursor-pointer sm:flex sm:m-0 sm:justify-center sm:gap-5 flex align-middle justify-center gap-10">
          <Link
            href="./upload"
            className="cursor-pointer text-white font-bold text-xl md:text-3xl"
          >
            My movie
          </Link>

          <Link
            href="./community"
            className="cursor-pointer text-white font-bold text-xl md:text-3xl"
          >
            Movies
          </Link>
        </div>
      </ul>
    </header>
  );
}
