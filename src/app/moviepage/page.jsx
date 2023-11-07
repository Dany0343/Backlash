"use client";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { LoadingScreen } from "../loadingScreen";
import Header from "../Header";
import { image } from "@nextui-org/react";
import TheShining from "../../../public/images/theshining.png";
import MovieCard from "./movieCard";

const MoviePage = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  const contentProps = useSpring({
    opacity: loadingFinished ? 1 : 0,
    from: { opacity: 0 },
  });

  const movie = [
    {
      image: TheShining, 
      title: "The Shining",
      duration: "2H 30 MIN",
      description: "lore ipsuuuuuuuuuuuuum",
      director: "by Kendrick Kubrick"
    }

  ];

  return (
    <div>

      {loadingFinished ? (
              <animated.div style={contentProps}>
                <Header />
                <main>
                <h1 className="text-center text-2xl my-4">.</h1>
                <div className="lg:justify-center justify-items-center">
                  {movie.map((movie, index) => (
                    <MovieCard
                      key={index}
                      image={movie.image}
                      title={movie.title}
                      duration={movie.duration}
                      description={movie.description}
                      director={movie.director}
                    />
                  ))}
                </div>
                </main>
              </animated.div>
            ) : (
              <LoadingScreen onFinished={() => setLoadingFinished(true)} />
            )}
          
  </div>
  )
};

export default MoviePage;
