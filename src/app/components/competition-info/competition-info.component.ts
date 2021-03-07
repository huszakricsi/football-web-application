import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Competition from 'src/app/interfaces/competition';

@Component({
  selector: 'app-competition-info',
  templateUrl:  './competition-info.component.html',
  styleUrls: ['./competition-info.component.css']
})
export class CompetitionInfoComponent {

  @Input() competition: Competition;
  
  constructor(
    private router: Router) { }

}
