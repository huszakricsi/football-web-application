import { Component, Input, OnInit } from '@angular/core';
import Score from 'src/app/interfaces/score';

@Component({
  selector: 'app-score-info',
  templateUrl: './score-info.component.html',
  styleUrls: ['./score-info.component.css']
})
export class ScoreInfoComponent implements OnInit {

  @Input() score: Score;

  constructor() { }

  ngOnInit(): void {
  }

}
