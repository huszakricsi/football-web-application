import { Component, Input, OnInit } from '@angular/core';
import TeamHead2Head from 'src/app/interfaces/team-head-2-head';

@Component({
  selector: 'app-team-head-to-head-info',
  templateUrl: './team-head-to-head-info.component.html',
  styleUrls: ['./team-head-to-head-info.component.css']
})
export class TeamHeadToHeadInfoComponent implements OnInit {

  @Input() teamHead2head: TeamHead2Head;

  constructor() { }

  ngOnInit(): void {
  }

}
