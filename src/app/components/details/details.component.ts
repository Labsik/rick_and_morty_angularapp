import { Component, OnInit, HostListener, Input } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Person } from "src/app/models/Person";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

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
    for (let pages = 1; pages <= 25; pages++) {
      this.dataService.getPersons(pages).subscribe(response => {
        for (let person of response.results) {
          this.persons.push(person);
        }
      });
    }
  }
}
