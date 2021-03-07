import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToolbarService } from 'src/app/services/toolbar-service/toolbar.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent {

  availablePaginationPageNumber: number[] = [1, 2, 5, 10, 25, 100];
  selectedPaginationPageNumber: number;

  constructor(
    private toolbarService: ToolbarService,
    private dialogRef: MatDialogRef<SettingsDialogComponent>) { 
      this.selectedPaginationPageNumber = this.toolbarService.getPaginationPageNumber();
    }

  currentPaginationPageNumber(): number{
    return this.toolbarService.getPaginationPageNumber();
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.toolbarService.setPaginationPageNumber(this.selectedPaginationPageNumber);
    this.dialogRef.close();
  }

}
