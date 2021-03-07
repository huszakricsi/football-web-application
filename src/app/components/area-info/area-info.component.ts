import { Component, Input, OnInit } from '@angular/core';
import Area from '../../interfaces/area';

@Component({
  selector: 'app-area-info',
  templateUrl: './area-info.component.html',
  styleUrls: ['./area-info.component.css']
})
export class AreaInfoComponent implements OnInit {

  @Input() area: Area;

  constructor() { }

  ngOnInit(): void {
  }

}
