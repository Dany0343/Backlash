import {prisma} from "../../libs/prisma"
import { NextResponse } from "next/server";


export async function POST(request: Request) {

  const {username, email, title, releaseDate, details, imageLink} = await request.json()
  // Convertir a formato ISO la variable releaseDate
  const formattedReleaseDate = new Date(releaseDate).toISOString();

  const newMovie = await prisma.video.create({
    data: {
      username,
      email,
      title,
      imageLink,
      releaseDate: formattedReleaseDate,
      details,
    }
  })
  

  return NextResponse.json(newMovie);
}


export async function GET(request: Request) {
  const movies = await prisma.video.findMany();
  return NextResponse.json(movies)
}
