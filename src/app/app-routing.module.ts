import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./components/start/start.component";
import { PersonsComponent } from "./components/persons/persons.component";
import { DetailsComponent } from "./components/details/details.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { PersonDetailsComponent } from "./components/person-details/person-details.component";

const routes: Routes = [
  { path: "", component: StartComponent },
  { path: "persons", component: PersonsComponent },
  { path: "details", component: DetailsComponent },
  { path: "persons/:id", component: PersonDetailsComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
