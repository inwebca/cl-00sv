import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "./db";
import errorHandler from "./utils/errorHandler";
import userRoutes from "./routes/user";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
//error middleware
app.use(errorHandler);

export default app;
