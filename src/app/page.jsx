"use client"

import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { LoadingScreen } from "./loadingScreen";
import Header from "./Header";

export default function Page() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  const contentProps = useSpring({
    opacity: loadingFinished ? 1 : 0,
    from: { opacity: 0 },
  });

  return (
    <>
      {loadingFinished ? (
        <animated.div style={contentProps}>
          <Header />
          <main>
            <div className="h-[800px] border-2 border-white m-9 rounded-md">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/_SPoSMmN3ZU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </main>
        </animated.div>
      ) : (
        <LoadingScreen onFinished={() => setLoadingFinished(true)} />
      )}
    </>
  );
}
