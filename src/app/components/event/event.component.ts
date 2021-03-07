import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Head2Head from '../../interfaces/head-2-head';
import Match from '../../interfaces/match';
import { FootballService } from '../../services/football-service/football.service';
import { ToolbarService } from '../../services/toolbar-service/toolbar.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  match: Match = null;
  head2head: Head2Head = null;

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService,
    private toolbarService: ToolbarService) {} 
  
  ngOnInit() {
    this.setData();
  }
  
  setData(): void {
    this.setTitle('Event');
    this.setLoading(true);
    const matchId = parseInt(this.route.snapshot.paramMap.get('matchId'));
    this.footballService.getMatchById(matchId)
    .subscribe(matchRequestResult => {
      this.match = matchRequestResult.match, this.head2head = matchRequestResult.head2head, this.setTitle(`Event:  ${this.match.homeTeam.name} - ${this.match.awayTeam.name}`), this.setLoading(false)});
  }

  setLoading(newLoading: boolean): void{
    this.toolbarService.setLoading(newLoading);
  }

  setTitle(newTitle: string): void {
    this.toolbarService.setTitle(newTitle);
  }
}
