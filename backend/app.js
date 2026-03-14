import express from "express";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import { setupSwagger } from "./docs/swagger.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/notes",noteRoutes);

setupSwagger(app);

export default app;