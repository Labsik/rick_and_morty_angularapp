import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./components/details/details.component";
import { PersonsComponent } from "./components/persons/persons.component";
import { StartComponent } from "./components/start/start.component";

import { DataService } from "./services/data.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { NotFoundComponent } from "./components/not-found/not-found.component";

import { NgxPaginationModule } from "ngx-pagination";
import { MatDialogModule } from "@angular/material/dialog";
import { PersonDetailsComponent } from "./components/person-details/person-details.component";

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    PersonsComponent,
    StartComponent,
    NotFoundComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
