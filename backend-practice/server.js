import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRouter from './Routes/auth.route.js'
import connectDB from "./dbConnect.js";
dotenv.config();

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", authRouter);

connectDB()

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
