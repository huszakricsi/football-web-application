import { Component, Input, OnInit } from '@angular/core';
import Team from 'src/app/interfaces/team';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}
