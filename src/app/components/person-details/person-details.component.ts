import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { ActivatedRoute} from "@angular/router";
import { Person } from "src/app/models/Person";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"]
})
export class PersonDetailsComponent implements OnInit {
  id: number;

  person: Person[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.dataService.getPerson(id).subscribe(person => (this.person = person));
  }
}
