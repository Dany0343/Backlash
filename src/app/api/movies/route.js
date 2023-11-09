// src/app/api/movies/route.js

import { PrismaClient } from '@prisma/client';

// Inicializa Prisma Client
const prisma = new PrismaClient();

// POST method
export async function POST(req, res) {
  const { username, emailAddress, title, linkImage, date, details } = req.body;
  
  try {
    const video = await prisma.video.create({
      data: {
        username,
        email: emailAddress,
        title,
        linkImage,
        date,
        details
        // Otros campos...
      },
    });

    return res.status(200).json({ video });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

// Agrega exportaciones nombradas para otros métodos HTTP según sea necesario, en MAYUSCULAS por ejemplo:
// export async function GET(req, res) { ... }
// export async function PUT(req, res) { ... }
// export async function DEL(req, res) { ... }
