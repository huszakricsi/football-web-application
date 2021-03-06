import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionComponent } from './competition/competition.component';
import { AreaComponent } from './area/area.component';
import { CurrentSeasonComponent } from './current-season/current-season.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailedCompetitionComponent } from './detailed-competition/detailed-competition.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitionComponent,
    AreaComponent,
    CurrentSeasonComponent,
    DetailedCompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
