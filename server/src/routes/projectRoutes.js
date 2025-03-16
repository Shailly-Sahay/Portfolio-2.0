import { Router } from "express";
import { projectController } from "../controllers/index.js";

const projectRouter = Router();

projectRouter.get("/", projectController.getAllProjects);
// projectRouter.post("/", projectController.createProject);

export default projectRouter;
