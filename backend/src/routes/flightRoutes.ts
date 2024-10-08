import { Router } from "express";
import {
  getCityCountryList,
  searchFlights,
} from "../controllers/flightController";
import { validateSearchQuery } from "../middlewares/validateQuery";

const router: Router = Router();

router.get("/citycountry", validateSearchQuery, getCityCountryList);
router.get("/search_flights", searchFlights);

export default router;
