import { Component, OnInit, HostListener, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";

import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  persons = [];
  page: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.page = 1;
  }

  ngOnInit() {
    for (let page = 1; page <= 25; page++) {
      this.dataService.getPersons(page).subscribe(response => {
        for (let person of response.results) {
          this.persons.push(person);
        }
      });
    }
  }
}
