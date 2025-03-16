import express from "express";
import projectRouter from "./projectRoutes.js";
import techStackRouter from "./techStackRoutes.js";

const router = express.Router();

// Register routes
router.use("/projects", projectRouter);
router.use("/techStack", techStackRouter);

export default router;
