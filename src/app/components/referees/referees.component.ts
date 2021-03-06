import { Component, Input, OnInit } from '@angular/core';
import Referee from 'src/app/interfaces/referee';

@Component({
  selector: 'app-referees',
  templateUrl: './referees.component.html',
  styleUrls: ['./referees.component.css']
})
export class RefereesComponent implements OnInit {

  @Input() referees: Referee[];

  constructor() { }

  ngOnInit(): void {
  }

}
