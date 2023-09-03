import express from "express";
import morgan from "morgan";
// ROUTES 
import jobsRoutes from "./routes/jobs.routes";

const app = express();

// settings
app.set("port", 4000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/jobs", jobsRoutes);

export default app;
 
