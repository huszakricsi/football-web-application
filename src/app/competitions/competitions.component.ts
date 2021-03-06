import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';
import { Competition } from '../interfaces';

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
