import { Component, Input, OnInit } from '@angular/core';
import { Competition } from '../interfaces';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  @Input() competition: Competition;
  
  constructor() { }

  ngOnInit(): void {
  }

}
