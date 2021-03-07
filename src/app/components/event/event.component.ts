import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import Head2Head from '../../interfaces/head-2-head';
import Match from '../../interfaces/match';
import { FootballService } from '../../services/football-service/football.service';
import { ToolbarService } from '../../services/toolbar-service/toolbar.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit, OnDestroy {

  match: Match = null;
  head2head: Head2Head = null;
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
    this.setTitle('Event');
    this.setLoading(true);
    const matchId = parseInt(this.route.snapshot.paramMap.get('matchId'));
    this.footballService.getMatchById(matchId)
    .subscribe(matchRequestResult => {
      this.match = matchRequestResult.match;
      this.head2head = matchRequestResult.head2head;
      this.setTitle(`Event:  ${this.match.homeTeam.name} - ${this.match.awayTeam.name}`);
      this.setLoading(false);
    });
  }

  setLoading(newLoading: boolean): void{
    this.toolbarService.setLoading(newLoading);
  }

  setTitle(newTitle: string): void {
    this.toolbarService.setTitle(newTitle);
  }

  remainingMatchTime(): number{
    var now = new Date();
    var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    var matchStart = Date.parse(this.match.utcDate.toString());
    var diffMs = (utc_timestamp - matchStart);
    var diffMins = Math.round(diffMs / 60000);
    return diffMins;
  }

  humanMatchClock(): string{
    return `${this.remainingMatchTime()} minute(s)`
  }

  humanMatchClockState(): string{
    if(this.remainingMatchTime()<=45){
      return 'First half';
    } else if(this.remainingMatchTime()<=90){
      return 'Second half';
    }else{
      return 'Overtime';
    }
  }

}