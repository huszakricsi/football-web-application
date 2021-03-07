import { Component, Input } from '@angular/core';
import Referee from 'src/app/interfaces/referee';

@Component({
  selector: 'app-referees',
  templateUrl: './referees.component.html',
  styleUrls: ['./referees.component.css']
})
export class RefereesComponent {

  @Input() referees: Referee[];

  constructor() { }

}
