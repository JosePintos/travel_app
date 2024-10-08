import { Request, Response } from "express";
import { getDestinationDetails } from "../services/attractionService";
import axios from "axios";

export const getContentful = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const destName = req.query.destinationName as string;
    const filteredData = await getDestinationDetails(destName);
    res.status(200).json(filteredData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data", error });
  }
};
