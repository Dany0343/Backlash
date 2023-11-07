import Header from "./Header";
import Image from "next/image";
import Logo from "../../public/images/hero.png";

export default function Page() {
  return (
    <>
      <div>
        <Header />
        <main>
          <div className="h-screen m-9 rounded-md">
            <div className="flex sm:flex-col">
              <Image
                src={Logo}
                width={400}
                height={400}
                alt="Picture of the author"
                className="rounded-md sm: w-[200px] h-[200px]"
              ></Image>
              <p className="text-white font-bold text-6xl self-center lg:ml-20 sm:text-sm">
                Backlash is a platform for anyone to share their cinematic
                creations. Dive into a world of user-generated content,
                available for viewing 24/7.
              </p>
            </div>
            <div className="flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Button
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
