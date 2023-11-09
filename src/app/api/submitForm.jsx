import { PrismaClient } from '@prisma/client';

// Inicializa Prisma Client
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Extrae los campos del cuerpo de la solicitud
    const { username, emailAddress, title, releaseDate, details } = req.body;

    try {
      // Utiliza Prisma Client para hacer la inserción en la base de datos
      const video = await prisma.video.create({
        data: {
          username,
          email: emailAddress,
          title,
          linkImage,
          releaseDate,
          details,
          // El campo azureLink se puede agregar más tarde, cuando el video esté en Azure
        },
      });
      
      // Si todo salió bien, envía una respuesta de éxito
      res.status(200).json({ video });
    } catch (e) {
      // En caso de error, envía una respuesta de error
      res.status(500).json({ error: e.message });
    }
  } else {
    // Si la solicitud no es POST, informa que ese método no está permitido
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
