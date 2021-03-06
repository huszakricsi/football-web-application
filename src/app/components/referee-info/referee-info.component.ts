import { Component, Input, OnInit } from '@angular/core';
import Referee from 'src/app/interfaces/referee';

@Component({
  selector: 'app-referee-info',
  templateUrl: './referee-info.component.html',
  styleUrls: ['./referee-info.component.css']
})
export class RefereeInfoComponent implements OnInit {

  @Input() referee: Referee;

  constructor() { }

  ngOnInit(): void {
  }

}
