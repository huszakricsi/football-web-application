import { Component, Input, OnInit } from '@angular/core';
import Match from 'src/app/interfaces/match';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  
  @Input() match: Match;

  constructor() { }

  ngOnInit(): void {
  }

}
