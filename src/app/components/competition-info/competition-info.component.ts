import { Component, Input, OnInit } from '@angular/core';
import Competition from 'src/app/interfaces/competition';

@Component({
  selector: 'app-competition-info',
  templateUrl:  './competition-info.component.html',
  styleUrls: ['./competition-info.component.css']
})
export class CompetitionInfoComponent implements OnInit {

  @Input() competition: Competition;
  @Input() withButton: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
