import { Component, Input } from '@angular/core';
import Team from 'src/app/interfaces/team';
import TeamPenaltyInfos from 'src/app/interfaces/team-penalty-infos';

@Component({
  selector: 'app-team-penalty-infos-info',
  templateUrl: './team-penalty-infos-info.component.html',
  styleUrls: ['./team-penalty-infos-info.component.css']
})
export class TeamPenaltyInfosInfoComponent {

  @Input() teamPenaltyInfos: TeamPenaltyInfos;
  @Input() homeTeam: Team;
  @Input() awayTeam: Team;

  constructor() { }

}
