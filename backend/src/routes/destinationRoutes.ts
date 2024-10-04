import { Router } from "express";
import { getDestinations } from "../controllers/destinationController";

const router: Router = Router();

router.get("/", getDestinations);

export default router;
