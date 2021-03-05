import { Component, Input, OnInit } from '@angular/core';
import { CurrentSeason } from '../interfaces';

@Component({
  selector: 'app-current-season',
  templateUrl: './current-season.component.html',
  styleUrls: ['./current-season.component.css']
})
export class CurrentSeasonComponent implements OnInit {

  @Input() currentSeason: CurrentSeason;

  constructor() { }

  ngOnInit(): void {
  }

}
