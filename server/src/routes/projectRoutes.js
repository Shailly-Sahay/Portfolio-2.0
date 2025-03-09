import { Router } from "express";
import { projectController } from "../controller/index.js";

const projectRouter = Router();

projectRouter.get("/", projectController.getAllProjects);

export default projectRouter;
