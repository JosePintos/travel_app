import { promises as fs } from "fs";
import path from "path";
import { filterDestinations } from "../helpers/helpers";
import { FilterObject } from "../types/types";

export const getFilteredDestinations = async (filters: FilterObject) => {
  const filePath = path.join(__dirname, "../../../database/destinations.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const destinations = JSON.parse(jsonData);

  //apply filtering logic
  return filterDestinations(destinations, filters);
};
