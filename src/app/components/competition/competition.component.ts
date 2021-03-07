import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService,
    private toolbarService: ToolbarService) {} 
  
    ngOnInit() {
      this.setData();
    }
    
    setData(): void {
      this.setTitle('Competition');
      this.setLoading(true);
      const competitionId = parseInt(this.route.snapshot.paramMap.get('competitionId'));
      this.footballService.getMatchesByCompetitionId(competitionId)
      .subscribe(matchesRequestResult => {
        this.competition = matchesRequestResult.competition,this.matches = matchesRequestResult.matches, this.setTitle(`Competition: ${this.competition.name}`), this.setLoading(false)});
    }

    setLoading(newLoading: boolean): void{
      this.toolbarService.setLoading(newLoading);
    }

    setTitle(newTitle: string): void {
      this.toolbarService.setTitle(newTitle);
    }
}
