import { Component, Input } from '@angular/core';
import Referee from 'src/app/interfaces/referee';

@Component({
  selector: 'app-referee-info',
  templateUrl: './referee-info.component.html',
  styleUrls: ['./referee-info.component.css']
})
export class RefereeInfoComponent {

  @Input() referee: Referee;

  constructor() { }

}
