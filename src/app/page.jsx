import Header from "./Header";
import Image from "next/image";
import Logo from "../../public/images/hero.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>
        <Header />
        <main>
          <div className="h-screen m-9 rounded-md">
            <div className="flex md:flex-row sm:flex-col sm:gap-4">
              <Image
                src={Logo}
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-md lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] sm:w-[250px] sm:h-[250px] sm:self-center"
              ></Image>
              <p className=" text-white font-bold lg:text-6xl md:text-4xl md:self-center lg:ml-20 sm:text-3xl">
                Backlash is a platform for anyone to share their cinematic
                creations. Dive into a world of user-generated content,
                available for viewing 24/7.
              </p>
            </div>
            <div className="flex justify-center mt-5 gap-12">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:text-3xl lg:text-5xl">
                <Link href="./community">Movies</Link>
              </button>

              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded md:text-3xl lg:text-5xl">
                <Link href="./upload">My Movie</Link>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Forma antigua de poner cargar componente */}
      {/* <Header />
      <main>
        <div className="h-[800px] border-2 border-white m-9 rounded-md">
          <iframe
            id="player"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_SPoSMmN3ZU"
            title="Backash streaming"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </main> */}

      {/* 

           .----.
          |</>_ |
        __|____|__
        |  ______--|
        `-/.::::.\-'a
        `--------'

      */}
    </>
  );
}
