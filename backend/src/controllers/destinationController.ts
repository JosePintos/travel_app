import { Request, Response } from "express";
import { getFilteredDestinations } from "../services/destinationService";
import { FilterObject } from "../types/types";

export const getDestinations = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const filters: FilterObject = {
      type: (req.query.type as string) || "all",
      rating: (req.query.rating as string) || "all",
      budget: (req.query.budget as string) || "all",
      location: req.query.location as string,
    };

    const filteredData = await getFilteredDestinations(filters);

    res.status(200).json(filteredData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data", error });
  }
};
