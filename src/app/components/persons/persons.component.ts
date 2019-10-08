import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Persons } from "src/app/models/Person";

import { MatSort } from "@angular/material/sort";

import { MatTableDataSource } from "@angular/material/table";

import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute } from "@angular/router";

import { merge, Observable, of as observableOf } from "rxjs";
import { map, startWith, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Sort } from "@angular/material/sort";
import { DetailsComponent } from '../details/details.component';
import { MatDialog, MatDialogConfig } from '@angular/material'

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"]
})
export class PersonsComponent implements AfterViewInit {
  displayedColumns: string[] = ["id", "name"];
  dataService: DataService;
  data;

  resultsLength = 0;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private http: HttpClient, private dialog: MatDialog ) {}

  ngAfterViewInit() {
    this.dataService = new DataService(this.http);

    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.dataService!.getPersons(this.paginator.pageIndex);
        }),
        map(data => {
          this.resultsLength = data.info.count;

          return data.results;
        })
      )
    
      .subscribe(data => (this.data = new MatTableDataSource(data)));
    // this.data.sort = this.sort;
  }


}
