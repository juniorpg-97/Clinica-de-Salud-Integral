import express from "express";
import prisma from "./config/prisma.js";

const app = express();

app.use(express.json());

app.get("/api/especialidades", async (req, res) => {
  const data = await prisma.especialidad.findMany();

  res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
