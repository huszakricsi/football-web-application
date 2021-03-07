import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  title = "Football web application";
  loading = false;
  paginationPageNumber: number = 1;

  constructor() { }

  getTitle(): string{
    return this.title;
  }

  setTitle(newTitle: string): void{
    this.title = newTitle;
  }

  isLoading(): boolean{
    return this.loading;
  }

  setLoading(newLoading: boolean): void{
    this.loading = newLoading;
  }

  getPaginationPageNumber(): number{
    return this.paginationPageNumber;
  }

  setPaginationPageNumber(newPaginationPageNumber: number): void{
    this.paginationPageNumber = newPaginationPageNumber;
  }
}
