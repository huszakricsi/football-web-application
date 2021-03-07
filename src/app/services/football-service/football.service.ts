import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import CompetitionsRequestResult from '../../interfaces/competitions-request-result';
import MatchesRequestResult from '../../interfaces/matches-request-result';
import { AuthenticationService } from '../authentication-service/authentication.service';
import MatchRequestResult from 'src/app/interfaces/match-request-result';
import { ToolbarService } from '../toolbar-service/toolbar.service';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiUrl = 'https://api.football-data.org/v2/';

  httpOptions = {
    headers: new HttpHeaders({ 'X-Auth-Token': this.authenticationService.getXAuthToken() })
  };

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private toolbarService: ToolbarService) { }

  getCompetitions(): Observable<CompetitionsRequestResult> {
    return this.http.get<CompetitionsRequestResult>(`${this.apiUrl}competitions?plan=TIER_ONE`, this.httpOptions).pipe(
        catchError((error) => {
          this.toolbarService.setLoading(false);
          console.log(`An error occurred during HTTP get(${this.apiUrl}competitions?plan=TIER_ONE)`);
          return throwError(error);
        })
    );
  }

  getMatchesByCompetitionId(id: number): Observable<MatchesRequestResult> {
    return this.http.get<MatchesRequestResult>(`${this.apiUrl}competitions/${id}/matches`, this.httpOptions).pipe(
      catchError((error) => {
        this.toolbarService.setLoading(false);
        console.log(`An error occurred during HTTP get(${this.apiUrl}competitions/${id}/matches)`);
        return throwError(error);
      })
    );
  }

  getMatchById(id: number): Observable<MatchRequestResult> {
    return this.http.get<MatchRequestResult>(`${this.apiUrl}matches/${id}`, this.httpOptions).pipe(
      catchError((error) => {
        this.toolbarService.setLoading(false);
        console.log(`An error occurred during HTTP get(${this.apiUrl}matches/${id})`);
        return throwError(error);
      })
    );
  }
}
