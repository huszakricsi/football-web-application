import { Component, Input } from '@angular/core';
import Winner from 'src/app/interfaces/winner';

@Component({
  selector: 'app-winner-info',
  templateUrl: './winner-info.component.html',
  styleUrls: ['./winner-info.component.css']
})
export class WinnerInfoComponent {

  @Input() winner: Winner;

  constructor() { }

}
