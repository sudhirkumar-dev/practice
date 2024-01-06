import express from "express";
import os from "os";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./dbConnect.js";
dotenv.config();

const app = express();
const port = 8000;

app.use(bodyParser.json());

connectDB()

app.get("/", (req, res) => {
  const platform = os.platform();
  const arch = os.arch();
  const cpus = os.cpus();
  const totalMemory = os.totalmem();
  const totalMemoryGB = totalMemory / (1024 * 1024 * 1024);
  res.json({
    platform,
    arch,
    cpus,
    totalMemory: totalMemoryGB.toFixed(2),
  });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
