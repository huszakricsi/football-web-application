import { Component, OnInit } from '@angular/core';
import Competition from 'src/app/interfaces/competition';
import { FootballService } from '../../services/football.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  competitions: Competition[] = [];

  constructor(private footballService: FootballService) { }  

  ngOnInit(): void {
    this.setCompetitions();
  }
  
  setCompetitions(): void {
    this.footballService.getCompetitions()
        .subscribe(competitionsRequestResult => this.competitions = competitionsRequestResult.competitions);
  }
}
