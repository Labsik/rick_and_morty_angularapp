import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Person } from "src/app/models/Person";

import { MatSort } from "@angular/material/sort";

import { MatTableDataSource } from "@angular/material/table";

import { MatPaginator } from "@angular/material/paginator";
import { ActivatedRoute } from "@angular/router";

export interface Person {
  id: number;
  name: string;
  status: string;
  gender: string;
}

@Component({
  selector: "app-persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"]
})
export class PersonsComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  persons;

  page: number;

  displayedColumns: string[] = ["id", "name"];

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.page;
  }

  ngOnInit() {
    this.dataService.getPersons().subscribe(response => {
      this.persons = new MatTableDataSource(response.results);
      this.persons.sort = this.sort;
      this.persons.paginator = this.paginator;
    });
  }
}
