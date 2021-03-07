import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/services/toolbar-service/toolbar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private toolbarService: ToolbarService) {}
  
  ngOnInit(): void {
  }
 
  getTitle(): string{
    return this.toolbarService.getTitle();
  }

  isLoading(): boolean{
    return this.toolbarService.isLoading();
  }
}
