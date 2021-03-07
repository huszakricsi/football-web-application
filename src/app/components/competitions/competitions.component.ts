import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import Competition from 'src/app/interfaces/competition';
import { ToolbarService } from 'src/app/services/toolbar-service/toolbar.service';
import { FootballService } from '../../services/football-service/football.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit, OnDestroy {

  title = "Competitions"
  competitions: Competition[] = [];
  competitionPage: any;
  pollingData: any;

  constructor(
    private footballService: FootballService,
    private toolbarService: ToolbarService) { 
      this.setTitle();
    }  

  ngOnInit(): void {
    window.scroll(0,0);
    this.pollValues();
  }
  
  ngOnDestroy(): void {
    this.pollingData.unsubscribe();
  }

  pollValues(): any {
      let count=0;
      this.pollingData=interval(20000)
      .pipe(
        startWith(0),
        switchMap(async () => this.setCompetitions())
      )
      .subscribe(
          res  => {},
          error=>{}
      );
  }
  
  setCompetitions(): void {
  this.setLoading(true);
  this.footballService.getCompetitions()
      .subscribe(competitionsRequestResult => {
        this.competitions = competitionsRequestResult.competitions;
        this.setLoading(false);
      });
  }

  setLoading(newLoading: boolean): void{
    this.toolbarService.setLoading(newLoading);
  }

  setTitle(): void {
    this.toolbarService.setTitle(this.title);
  }

  getPaginationPageNumber(): number{
    return this.toolbarService.getPaginationPageNumber();
  }
}
