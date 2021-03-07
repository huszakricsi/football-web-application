import { Component, Input } from '@angular/core';
import Competition from 'src/app/interfaces/competition';
import Match from 'src/app/interfaces/match';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent {
  
  @Input() match: Match;
  @Input() competition: Competition;

  constructor() { }

  humanStatus(): string{
    if(this.match.status === "SCHEDULED"){
      return 'Scheduled';
    } else if(this.match.status === "IN_PLAY"){
      return 'Live';
    }else{
      return 'Finished';
    }
  }
}
