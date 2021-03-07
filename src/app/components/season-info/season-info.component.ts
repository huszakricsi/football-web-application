import { Component, Input } from '@angular/core';
import Season from 'src/app/interfaces/season';

@Component({
  selector: 'app-season-info',
  templateUrl: './season-info.component.html',
  styleUrls: ['./season-info.component.css']
})
export class SeasonInfoComponent {

  @Input() season: Season;

  constructor() { }

}
