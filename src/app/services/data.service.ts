import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonResponse, ResponseInterface, Person } from "../models/Person";

@Injectable()
export class DataService {
  personsUrl: string = "https://rickandmortyapi.com/api/character/?page=";

  constructor(private http: HttpClient) {}

  // getPersons(): Observable<Person[]> {
  //   return this.http.get<Person[]>(this.personsUrl).results;
  // }

  getPersons(pageNumber: number = 1): Observable<PersonResponse> {
    return this.getResponse(this.personsUrl + `${pageNumber}`);
  }

  getResponse(url: string): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(url);
  }
}
