import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Person } from "src/app/models/Person";
import { Observable } from "rxjs";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"]
})
export class PersonDetailsComponent implements OnInit {
  persons;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  getPerson() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService
      .getPerson(id)
      .subscribe(person => (this.persons = person.results));
    console.log(this.persons.results);
  }
}
