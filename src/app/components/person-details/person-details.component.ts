import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Person } from "src/app/models/Person";
import { Observable } from "rxjs";
import { $ } from "protractor";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"]
})
export class PersonDetailsComponent implements OnInit {
  id: number;
  // persons$: Observable<Person[]>;
  persons;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.persons$ = this.route.paramMap.pipe(
    //   switchMap((params: Params) => {
    //     return this.dataService.getPerson(params["id"]);
    //   })
    // );
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getPerson(id).subscribe(person => (this.persons = person));
    console.log(typeof this.persons);
  }

  // getPerson() {
  //   const id = +this.route.snapshot.paramMap.get("id");
  //   this.dataService
  //     .getPerson(id)
  //     .subscribe(person => (this.persons = person));
  //   console.log(this.persons);
  // }
}
