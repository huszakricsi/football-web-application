import { Component, Input } from '@angular/core';
import Head2Head from 'src/app/interfaces/head-2-head';

@Component({
  selector: 'app-head-to-head-info',
  templateUrl: './head-to-head-info.component.html',
  styleUrls: ['./head-to-head-info.component.css']
})
export class HeadToHeadInfoComponent {

  @Input() head2head: Head2Head;
  
  constructor() { }

}
