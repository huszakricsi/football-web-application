import { Component, Input, OnInit } from '@angular/core';
import Score from 'src/app/interfaces/score';
import Team from 'src/app/interfaces/team';

@Component({
  selector: 'app-score-info',
  templateUrl: './score-info.component.html',
  styleUrls: ['./score-info.component.css']
})
export class ScoreInfoComponent implements OnInit {

  @Input() score: Score;
  @Input() homeTeam: Team;
  @Input() awayTeam: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
