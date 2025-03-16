import { Router } from "express";
import { techStackController } from "../controllers/index.js";

const techStackRouter = Router();

techStackRouter.get("/", techStackController.getAllTechStack);
// projectRouter.post("/", projectController.createProject);

export default techStackRouter;
