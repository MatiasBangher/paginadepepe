// Receptor serverless para Vercel. La fuga llega como querystring.
// Vercel no persiste archivos entre invocaciones, así que lo registramos
// en los logs (visibles en el dashboard de Vercel → Deployments → Functions → Logs).

export default function handler(req, res) {
  const data = req.query || {};
  // Queda en los logs de la función:
  console.log("LEAK", JSON.stringify(data));

  // Gif 1x1 para que el canal <img> no muestre error.
  const gif = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
    "base64"
  );
  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(gif);
}
