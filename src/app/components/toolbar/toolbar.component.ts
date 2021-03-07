import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToolbarService } from 'src/app/services/toolbar-service/toolbar.service';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(
    private toolbarService: ToolbarService,
    private dialog: MatDialog) {}

  getTitle(): string{
    return this.toolbarService.getTitle();
  }

  isLoading(): boolean{
    return this.toolbarService.isLoading();
  }

  openSettingsDialog(): void {
    this.dialog.open(SettingsDialogComponent);
  }
}
