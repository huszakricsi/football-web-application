import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CompetitionsRequestResult from '../../interfaces/competitions-request-result';
import MatchesRequestResult from '../../interfaces/matches-request-result';
import { AuthenticationService } from '../authentication-service/authentication.service';
import MatchRequestResult from 'src/app/interfaces/match-request-result';

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
    private authenticationService: AuthenticationService) { }

  getCompetitions(): Observable<CompetitionsRequestResult> {
    return this.http.get<CompetitionsRequestResult>(`${this.apiUrl}competitions?plan=TIER_ONE`, this.httpOptions)
  }

  getMatchesByCompetitionId(id: number): Observable<MatchesRequestResult> {
    return this.http.get<MatchesRequestResult>(`${this.apiUrl}competitions/${id}/matches`, this.httpOptions)
  }

  getMatchById(id: number): Observable<MatchRequestResult> {
    return this.http.get<MatchRequestResult>(`${this.apiUrl}matches/${id}`, this.httpOptions)
  }
}
