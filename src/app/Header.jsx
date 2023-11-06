import Link from "next/link";

export default function Header() {
  return (
    <header>
      <ul className="w-full flex flex-row justify-center items-center gap-20">
        <Link
          href="./upload"
          className="cursor-pointer text-white font-bold text-xl"
        >
          Upload
        </Link>
        <Link
          href="/"
          className="text-5xl font-bold glitch cursor-pointer"
        >
          Backlash
        </Link>
        <Link
          href="./community"
          className="cursor-pointer text-white font-bold text-xl"
        >
          Peliculas
        </Link>
      </ul>
    </header>

  );
}
