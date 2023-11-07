"use client";
import Header from "../Header";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TotallyKiller from "../../../public/images/TotallyKiller.png";
import Barbie from "../../../public/images/Barbie.png";
import Bottoms from "../../../public/images/Bottoms.png";
import Exorcist from "../../../public/images/exorcist.png";
import Fairplay from "../../../public/images/fairplay.png";
import FightClub from "../../../public/images/fightclub.png";
import Friday13 from "../../../public/images/friday13.png";
import Getout from "../../../public/images/getout.png";
import NoOne from "../../../public/images/noonewillsaveyou.png";
import Oppen from "../../../public/images/oppenheimer.png";
import Pastlives from "../../../public/images/pastlives.png";
import Pearl from "../../../public/images/pearl.png";
import SAW from "../../../public/images/saw.png";
import SAWX from "../../../public/images/sawx.png";
import Scream from "../../../public/images/Scream.png";
import TalkToMe from "../../../public/images/TalktoMe.png";
import TheCreator from "../../../public/images/thecreator.png";
import TheExorcist from "../../../public/images/theexorcist.png";
import TheShining from "../../../public/images/theshining.png";
import Cinema from "../../../public/images/cinema.png"

export default function Watch() {
  // Se usa el hook
  const searchParams = useSearchParams();

  // Obtenerlos con el metodo get
  const title = searchParams.get("title");
  const image = searchParams.get("image");
  const description = searchParams.get("description");
  const user = searchParams.get("user");

  return (
    <>
      <Header />
      <div className="flex md:flex-col sm:flex-col sm:gap-4 m-9">
        <p className=" text-white font-bold lg:text-4xl md:text-3xl md:self-center lg:ml-20 sm:text-xl">
          {title}
        </p>
        {/* <Image
          src={image}
          width={400}
          height={400}
          alt="Picture of the author"
          className="rounded-md lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] sm:self-center"
        ></Image> */}
        <p className=" text-white font-bold lg:text-4xl md:text-xl md:self-center lg:ml-20 sm:text-xl">
          {description}
        </p>
        <p className=" text-white font-bold lg:text-4xl md:text-xl md:self-center lg:ml-20 sm:text-xl">
          {user}
        </p>
      </div>
      <div className="flex justify-center mt-5 gap-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:text-3xl lg:text-5xl">
          <Link href="./community">Ver pelicula</Link>
        </button>

        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded md:text-3xl lg:text-5xl">
          <Link href="/">Volver</Link>
        </button>
      </div>
    </>
  );
}
