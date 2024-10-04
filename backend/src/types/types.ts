//En general aqui irian types/interfaces (clases?) que se reusen mucho.
//FilterObject no se reusa mucho pero lo pongo aqui para saber que esta este archivo para dichos casos. Con dejarlo en el archivo/copmponente que lo usa basta.

export interface FilterObject {
  type: string;
  rating: string;
  budget: string;
  location: string;
}
