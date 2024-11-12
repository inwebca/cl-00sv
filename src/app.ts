import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "./db";
import userRoutes from "./routes/users";
import protectedRoutes from "./routes/protected";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
app.use("/protected", protectedRoutes);

export default app;
