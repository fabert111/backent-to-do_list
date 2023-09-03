import { Router } from "express";
import { methods as jobsControllers } from "../controllers/jobs.controllers";

const router = Router();

router.get("/", jobsControllers.getJobss);
router.get("/:id", jobsControllers.getJobs);
router.post("/", jobsControllers.addJobs);
router.put("/:id", jobsControllers.updateJobs);
router.delete("/:id", jobsControllers.deleteJobs);

export default router;