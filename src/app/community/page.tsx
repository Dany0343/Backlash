"use client"
import React, { useEffect, useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Card from "./Card";
import Link from "next/link";

export default function Community() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setMovies(data);
    }

    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-center text-2xl my-4">Peliculas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border-2 border-white m-9 rounded-md lg:justify-center justify-items-center">
        {movies.map((movie, index) => (
          <Link
            href={{
              pathname: "/watch",
              query: {
                image: movie.imageLink,
                title: movie.title,
                description: movie.details,
                user: movie.username,
              },
            }}
            key={index}
          >
            <Card
              image={movie.imageLink} 
              title={movie.title}
              description={movie.details}
              user={movie.username}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
