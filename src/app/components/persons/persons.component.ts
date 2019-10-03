import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Person } from "src/app/models/Person";

import { MatSort } from "@angular/material/sort";

import { MatTableDataSource } from "@angular/material/table";

import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute } from "@angular/router";

import { merge, Observable, of as observableOf } from "rxjs";
import { catchError, map, startWith, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import {Sort} from '@angular/material/sort';

export interface ResponseInterface {
  info: any;
  results: any;
}

export interface PersonResponse extends ResponseInterface {
  results: Person[];
}

export interface Person {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;
  origin?: {
    name?: string;
  };
  location?: {
    name?: string;
  };
}

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"]
})
// export class PersonsComponent implements OnInit {
//   @ViewChild(MatSort, { static: true }) sort: MatSort;
//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

//   persons;

//   page: number;

//   displayedColumns: string[] = ["id", "name"];

//   constructor(private dataService: DataService, private route: ActivatedRoute) {
//     this.page;
//   }

//   ngOnInit() {
//     this.dataService.getPersons().subscribe(response => {
//       this.persons = new MatTableDataSource(response.results);
//       this.persons.sort = this.sort;
//       this.persons.paginator = this.paginator;
//     });
//   }
// }
export class PersonsComponent implements AfterViewInit {
  displayedColumns: string[] = ["id", "name"];
  dataService: DataService;
  data: Person[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    this.dataService = new DataService(this.http);

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.dataService!.getPersons(this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          // this.resultsLength = data.results.length;
          this.resultsLength = data.info.count;

          return data.results;
          // this.data.sort = this.sort;
        })
      )
      .subscribe(data => (this.data = data));
  }

}