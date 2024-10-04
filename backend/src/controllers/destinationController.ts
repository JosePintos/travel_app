import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";
import { filterDestinations } from "../helpers/helpers";
import { FilterObject } from "../types/types";

export const getDestinations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const filePath = path.join(
      __dirname,
      "../../../database/destinations.json"
    );
    const jsonData = await fs.readFile(filePath, "utf-8");
    const destinations = JSON.parse(jsonData);

    const filters: FilterObject = {
      type: (req.query.type as string) || "all",
      rating: (req.query.rating as string) || "all",
      budget: (req.query.budget as string) || "all",
      location: req.query.location as string,
    };

    const filteredData = filterDestinations(destinations, filters);

    res.status(200).json(filteredData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data", error });
  }
};
