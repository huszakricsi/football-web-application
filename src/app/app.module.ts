import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionInfoComponent } from './components/competition-info/competition-info.component';
import { AreaComponent } from './components/area/area.component';
import { SeasonInfoComponent } from './components/season-info/season-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionComponent } from './components/competition/competition.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { OddsInfoComponent } from './components/odds-info/odds-info.component';
import { RefereeInfoComponent } from './components/referee-info/referee-info.component';
import { ScoreInfoComponent } from './components/score-info/score-info.component';
import { TeamScoreInfosInfoComponent } from './components/team-score-infos-info/team-score-infos-info.component';
import { TeamPenaltyInfosInfoComponent } from './components/team-penalty-infos-info/team-penalty-infos-info.component';
import { RefereesComponent } from './components/referees/referees.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitionInfoComponent,
    AreaComponent,
    SeasonInfoComponent,
    CompetitionComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    OddsInfoComponent,
    RefereeInfoComponent,
    ScoreInfoComponent,
    TeamScoreInfosInfoComponent,
    TeamPenaltyInfosInfoComponent,
    RefereesComponent
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
