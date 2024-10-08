import {
  FilterObject,
  FlightObject,
  GenericObject,
  DestinationDetailsObject,
  AttractionObject,
} from "../types/types";

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

export const extractFlightData = (results: any[]): FlightObject[] => {
  return results.map((item) => {
    const res: FlightObject = {
      price: item?.content?.price ?? 0,
      depDate: item?.content?.outboundLeg?.localDepartureDateLabel ?? "Unknown",
      fromAirport: item?.content?.outboundLeg?.originAirport?.name ?? "Unknown",
      toAirport:
        item?.content?.outboundLeg?.destinationAirport?.name ?? "Unknown",
    };
    return res;
  });
};

export const formatDestinationDetails = (
  contentfulData: any
): DestinationDetailsObject => {
  const entries = contentfulData.includes.Entry;
  const assets = contentfulData.includes.Asset;
  const fields = contentfulData.items[0].fields;

  const indexHeroImg = assets.findIndex(
    (element: any) => element.sys.id == fields.heroImage.sys.id
  );
  const [heroImage] = assets.splice(indexHeroImg, 1);

  const attractions: Array<AttractionObject> = entries.map((item: any) => {
    const res = {
      attractionImage: assets.find(
        (img: any) => img.sys.id === item.fields.attractionImage.sys.id
      ).fields.file.url,
      attractionTitle: item.fields.attractionTitle,
      attractionText: item.fields.attractionText,
    };
    return res;
  });

  const detailsArr: DestinationDetailsObject = {
    destinationName: fields.destinationName,
    description: fields.description,
    heroImage: heroImage.fields.file.url,
    attractions: attractions,
  };

  return detailsArr;
};
