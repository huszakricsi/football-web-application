import { Component, Input, OnInit } from '@angular/core';
import Area from '../../interfaces/area';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  @Input() area: Area;

  constructor() { }

  ngOnInit(): void {
  }

}
