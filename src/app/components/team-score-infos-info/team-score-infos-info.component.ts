import { Component, Input, OnInit } from '@angular/core';
import TeamScoreInfos from 'src/app/interfaces/team-score-infos';

@Component({
  selector: 'app-team-score-infos-info',
  templateUrl: './team-score-infos-info.component.html',
  styleUrls: ['./team-score-infos-info.component.css']
})
export class TeamScoreInfosInfoComponent implements OnInit {
  
  @Input() teamScoreInfos: TeamScoreInfos;

  constructor() { }

  ngOnInit(): void {
  }

}
