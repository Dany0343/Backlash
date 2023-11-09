"use client"

import { BlobServiceClient } from '@azure/storage-blob';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { base64Image } = req.body; // Cambia el nombre del campo según corresponda


      const storageAccount = 'backlash';
      const containerName = 'dev';
      const accessKey = 'DefaultEndpointsProtocol=https;AccountName=backlash;AccountKey=QP0IeyrUM8ZveTop4fYRIos9O+ov5MZpcDQVKmxyRbf8kAd+BOANDGZIQh1Jj0b+tsuIn6UghPQM+AStJJUdBg==;EndpointSuffix=core.windows.net';
      const connectionString = 'BlobEndpoint=https://backlash.blob.core.windows.net/;QueueEndpoint=https://backlash.queue.core.windows.net/;FileEndpoint=https://backlash.file.core.windows.net/;TableEndpoint=https://backlash.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-11-09T02:52:17Z&st=2023-11-07T18:52:17Z&spr=https,http&sig=J8YKgRniuOMsrGbvxLEK2PCpyxTXPrXSwTkHNzQuakQ%3D';

      const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
      const containerClient = blobServiceClient.getContainerClient(containerName);
      const filename = `${Date.now()}.png`;
      const imageBuffer = Buffer.from(base64Image, 'base64');
      const blockBlobClient = containerClient.getBlockBlobClient(filename);
      await blockBlobClient.uploadData(imageBuffer, { blobHTTPHeaders: { blobContentType: 'image/png' } }); // Cambia el tipo de contenido según corresponda

      res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
