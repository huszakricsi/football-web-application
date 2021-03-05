import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { CompetitionComponent } from './competition/competition.component';
import { AreaComponent } from './area/area.component';
import { CurrentSeasonComponent } from './current-season/current-season.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitionComponent,
    AreaComponent,
    CurrentSeasonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
