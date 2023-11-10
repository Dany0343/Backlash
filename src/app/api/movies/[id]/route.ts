import { NextResponse } from "next/server";
import { Prisma } from "prisma/prisma-client";
import { prisma } from "../../../libs/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params.id);
  try {
    const movie = await prisma.video.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!movie) {
      return NextResponse.json(
        {
          message: "Movie not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(movie);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedMovie = await prisma.video.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deletedMovie) {
      return NextResponse.json(
        {
          message: "Movie not found",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(deletedMovie);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Movie not found",
          },
          {
            status: 404,
          }
        );
      }
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { title, details, releaseDate, imageLink } = await request.json();
    const updatedMovie = await prisma.video.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        details,
        releaseDate,
        imageLink,
      },
    });

    return NextResponse.json(updatedMovie);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
