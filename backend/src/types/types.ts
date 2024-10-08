//En general aqui irian types/interfaces (clases?) que se reusen mucho.
//FilterObject no se reusa mucho pero lo pongo aqui para saber que esta este archivo para dichos casos. Con dejarlo en el archivo/copmponente que lo usa basta.
export interface GenericObject<T> {
  data: T;
}

export interface FilterObject {
  type: string;
  rating: string;
  budget: string;
  location: string;
}

export interface FlightObject {
  price: string;
  arrDate?: string;
  depDate: string;
  fromAirport: string;
  toAirport: string;
  carrier?: string;
}

export interface AttractionObject {
  attractionTitle: string;
  attractionText: string;
  attractionImage: string;
}

export interface DestinationDetailsObject {
  destinationName: string;
  description: string;
  heroImage: string;
  attractions: Array<AttractionObject>;
}
