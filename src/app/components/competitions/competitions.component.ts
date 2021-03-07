import { Component, OnInit } from '@angular/core';
import Competition from 'src/app/interfaces/competition';
import { ToolbarService } from 'src/app/services/toolbar-service/toolbar.service';
import { FootballService } from '../../services/football-service/football.service';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {

  title = "Competitions"
  competitions: Competition[] = [];
  competitionPage: any;

  constructor(
    private footballService: FootballService,
    private toolbarService: ToolbarService) { 
      this.setTitle();
    }  

  ngOnInit(): void {
    this.setCompetitions();
  }
  
  setCompetitions(): void {
  this.setLoading(true);
  this.footballService.getCompetitions()
      .subscribe(competitionsRequestResult => {
        this.competitions = competitionsRequestResult.competitions;
        this.setLoading(false);
        window.scroll(0,0);
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
