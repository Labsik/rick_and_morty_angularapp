import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseInterface, PersonsResponse, Person } from "../models/Person";

@Injectable()
export class DataService {
  personsUrl: string = "https://rickandmortyapi.com/api/character/?page=";
  personUrl: string = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) {
    
  }

  getPersons(pageNumber: number): Observable<PersonsResponse> {
    return this.getResponse(this.personsUrl + `${pageNumber + 1}`);
  }

  getResponse(url: string): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(url);
  }

  getPerson(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(this.personUrl + `${id}`);
  }
}
