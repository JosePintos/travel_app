import { Router } from "express";
import { getCityCountryList } from "../controllers/flightController";

const router: Router = Router();

router.get("/", getCityCountryList);

export default router;
