import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FootballService } from '../football.service';
import { Competition } from '../interfaces';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  @Input() competition: Competition;
  
  constructor(
    private route: ActivatedRoute,
    private footballService: FootballService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id'] !== null) {
        this.setCompetitionById(params['id'])
      }
    });
  }
  setCompetitionById(id: number): void {
    this.footballService.getCompetitionById(id)
        .subscribe(competition => this.competition = competition);
  }

}
