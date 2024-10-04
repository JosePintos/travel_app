import { Request, Response } from "express";
import { formatAutocompleteLocation } from "../helpers/helpers";
import axios from "axios";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const getCityCountryList = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userQuery = req.query.q;
  if (!userQuery) {
    res.status(400).send("Query parameter is required");
  }
  try {
    const token = process.env.API_AUTOCOMPLETE_TOKEN;

    const response = await axios.get(
      `https://api.locationiq.com/v1/autocomplete?q=${userQuery}`,
      {
        params: { key: `${token}`, tag: "place:city" },
      }
    );

    const cities_countries = formatAutocompleteLocation(response.data);

    res.json(cities_countries);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cities,country", error });
  }
};
