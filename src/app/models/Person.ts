
export interface ResponseInterface {
  info: object;
  results: any;
}

export interface PersonResponse extends ResponseInterface {
  results: Person[];
}

export interface Person {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}
