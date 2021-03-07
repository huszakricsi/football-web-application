import { Component, Input } from '@angular/core';
import Odds from 'src/app/interfaces/odds';

@Component({
  selector: 'app-odds-info',
  templateUrl: './odds-info.component.html',
  styleUrls: ['./odds-info.component.css']
})
export class OddsInfoComponent {

  @Input() odds: Odds;
  
  constructor() { }

}
