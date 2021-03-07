import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  title = "Football web application";
  loading = false;

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
}
