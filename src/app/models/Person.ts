
export interface ResponseInterface {
  info: any;
  results: any;
}

export interface PersonsResponse extends ResponseInterface {
  results: Persons[];
}

export interface Persons {
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


export interface Person{
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;
  origin?: {
    name?: string;
  };
  location: {
    name?: string;
  };
}