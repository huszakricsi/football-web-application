import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import Competition from 'src/app/interfaces/competition';
import Match from 'src/app/interfaces/match';
import { ToolbarService } from 'src/app/services/toolbar-service/toolbar.service';
import { FootballService } from '../../services/football-service/football.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competition: Competition = null;
  matches: Match[] = [];
  scheduledMatches: Match[] = [];
  inPlayMatches: Match[] = [];
  finishedMatches: Match[] = [];
  scheduledMatchesPage: any;
  inPlayMatchesPage: any;
  finishedMatchesPage: any;
  pollingData: any;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService,
    private toolbarService: ToolbarService) {} 
  
  ngOnInit(): void {
    window.scroll(0,0);
    this.pollValues();
  }
    
  ngOnDestroy(): void {
    this.pollingData.unsubscribe();
  }

  pollValues(): any {
      let count=0;
      this.pollingData=interval(20000)
      .pipe(
        startWith(0),
        switchMap(async () => this.setData())
      )
      .subscribe(
          res  => {},
          error=>{}
      );
  }

  setData(): void {
    this.setTitle('Competition');
    this.setLoading(true);
    const competitionId = parseInt(this.route.snapshot.paramMap.get('competitionId'));
    this.footballService.getMatchesByCompetitionId(competitionId)
    .subscribe(matchesRequestResult => {
      this.competition = matchesRequestResult.competition;
      this.matches = matchesRequestResult.matches;
      this.aggroupMatches();
      this.setTitle(`Competition: ${this.competition.name}`);
      this.setLoading(false);
    });
  }

  setLoading(newLoading: boolean): void{
    this.toolbarService.setLoading(newLoading);
  }

  aggroupMatches(): void{
    let self = this;
    this.scheduledMatches = [];
    this.inPlayMatches = [];
    this.finishedMatches = [];

    this.matches.forEach(function (match) {
      if(match.status === "SCHEDULED"){
        self.scheduledMatches.push(match);
      } else if(match.status === "IN_PLAY"){
        self.inPlayMatches.push(match);
      }else{
        self.finishedMatches.push(match);
      }
    }); 
  }

  setTitle(newTitle: string): void {
    this.toolbarService.setTitle(newTitle);
  }

  getPaginationPageNumber(): number{
    return this.toolbarService.getPaginationPageNumber();
  }
}
