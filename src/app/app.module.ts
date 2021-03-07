import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionInfoComponent } from './components/competition-info/competition-info.component';
import { AreaInfoComponent } from './components/area-info/area-info.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { WinnerInfoComponent } from './components/winner-info/winner-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionsComponent,
    CompetitionInfoComponent,
    AreaInfoComponent,
    SeasonInfoComponent,
    CompetitionComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    OddsInfoComponent,
    RefereeInfoComponent,
    ScoreInfoComponent,
    TeamScoreInfosInfoComponent,
    TeamPenaltyInfosInfoComponent,
    RefereesComponent,
    ToolbarComponent,
    WinnerInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
