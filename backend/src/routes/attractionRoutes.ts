import { Router } from "express";
import { getContentful } from "../controllers/attractionController";

const router: Router = Router();

router.get("/attraction_content", getContentful);

export default router;
