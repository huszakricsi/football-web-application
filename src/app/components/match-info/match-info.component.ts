import { Component, Input, OnInit } from '@angular/core';
import Competition from 'src/app/interfaces/competition';
import Match from 'src/app/interfaces/match';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  
  @Input() match: Match;
  @Input() competition: Competition;

  constructor() { }

  ngOnInit(): void {
  }

}
