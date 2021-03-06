import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Competition from 'src/app/interfaces/competition';
import Match from 'src/app/interfaces/match';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  competition: Competition = null;
  matches: Match[] = [];

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService) {}

  ngOnInit() {
    const competitionId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.setData(competitionId);
  }
    
  setData(id: number): void {
    this.footballService.getMatchesByCompetitionId(id)
        .subscribe(matchesRequestResult => {this.competition = matchesRequestResult.competition, this.matches = matchesRequestResult.matches});
  }
}
