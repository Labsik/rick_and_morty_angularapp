import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonResponse, ResponseInterface, Person } from "../models/Person";
import { ActivatedRoute } from "@angular/router";

@Injectable()
export class DataService {
  personsUrl: string = "https://rickandmortyapi.com/api/character/?page=";
  personUrl: string = "https://rickandmortyapi.com/api/character/";
  constructor(private http: HttpClient) {}

  getPersons(pageNumber: number): Observable<PersonResponse> {
    return this.getResponse(this.personsUrl + `${pageNumber + 1}`);
  }

  getResponse(url: string): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(url);
  }

  // getPerson(id: string): Observable<PersonResponse>{
  //   return this.getResponse(`this.personUrl/${id}`);
  // }

  getPerson(id: number): Observable<PersonResponse> {
    return this.getResponse(this.personUrl + `${id}`);
  }
}
