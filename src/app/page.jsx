import Header from "./Header";
import Image from "next/image";
import Logo from "../../public/images/backlash.png";

export default function Page() {
  return (
    <>
      <div>
        <Header />
        <main>
          <div className="h-full m-9 rounded-md">
            <div className="flex">
              <Image
                src={Logo}
                width={400}
                height={400}
                alt="Picture of the author"
              ></Image>
              <p className="text-white font-bold text-6xl self-center lg:ml-20">Backlash is a platform for anyone to share their cinematic creations. Dive into a world of user-generated content, available for viewing 24/7.</p>
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
