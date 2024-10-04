import { FilterObject } from "../types/types";

export const filterDestinations = (data: any[], filters: FilterObject) => {
  //aqui deberia agregar despues los otros filtros dentro del obj filters
  return data.filter(
    (x) =>
      x.country == filters.location &&
      (x.type == filters.type || filters.type == "all") &&
      (x.rating >= filters.rating || filters.rating == "all") &&
      (x.budget == filters.budget || filters.budget == "all")
  );
};

export const formatAutocompleteLocation = (data: any[]) => {
  return data.map((x) => x.display_name);
};
