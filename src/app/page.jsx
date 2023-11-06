import Header from "./Header";

export default function Page() {

  return (
    <>
      <div>
        <Header />
        <main>
          <h1 className="text-white ml-9 mr-9 text-center">
            Narcocultura - 2010
          </h1>
          <div className="h-[800px] border-2 border-white m-9 rounded-md">
            {/* Dentro de este div debe de ir el componente de video */}
            <iframe
              id="player"
              width="100%"
              height="100%"
              src="https://1714-189-203-145-167.ngrok-free.app"
              title="Backlash streaming"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
