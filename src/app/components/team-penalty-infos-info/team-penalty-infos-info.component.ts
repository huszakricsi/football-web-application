import { Component, Input, OnInit } from '@angular/core';
import TeamPenaltyInfos from 'src/app/interfaces/team-penalty-infos';

@Component({
  selector: 'app-team-penalty-infos-info',
  templateUrl: './team-penalty-infos-info.component.html',
  styleUrls: ['./team-penalty-infos-info.component.css']
})
export class TeamPenaltyInfosInfoComponent implements OnInit {

  @Input() teamPenaltyInfos: TeamPenaltyInfos;

  constructor() { }

  ngOnInit(): void {
  }

}
