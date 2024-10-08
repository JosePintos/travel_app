import { Request, Response } from "express";
import {
  getCityCountryListService,
  searchFlightsService,
  getCityCode,
} from "../services/flightService";

export const getCityCountryList = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userQuery = req.query.q as string;
    const cities_countries = await getCityCountryListService(userQuery);
    res.json(cities_countries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cities,country", error });
  }
};

export const searchFlights = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const currD = new Date();
    const departureDate = `${currD.getFullYear()}-${currD.getMonth() + 1}`;

    const adults = req.query.adults as string;
    const origin = await getCityCode(req.query.origin as string);
    const destination = req.query.destination as string;

    const flights = await searchFlightsService(
      adults,
      destination,
      departureDate,
      origin
    );

    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch flights", error });
  }
};

export const fetchEntityId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const queryString = req.query.q as string;
    const id = await getCityCode(queryString);

    res.json(id);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch flights", error });
  }
};
