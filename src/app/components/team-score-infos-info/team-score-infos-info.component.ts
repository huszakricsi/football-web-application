import { Component, Input, OnInit } from '@angular/core';
import Team from 'src/app/interfaces/team';
import TeamScoreInfos from 'src/app/interfaces/team-score-infos';

@Component({
  selector: 'app-team-score-infos-info',
  templateUrl: './team-score-infos-info.component.html',
  styleUrls: ['./team-score-infos-info.component.css']
})
export class TeamScoreInfosInfoComponent implements OnInit {
  
  @Input() teamScoreInfos: TeamScoreInfos;
  @Input() homeTeam: Team;
  @Input() awayTeam: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
