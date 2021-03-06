import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Competition, CompetitionRequestResult, CompetitionsRequestResult } from './interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private apiUrl = 'http://api.football-data.org/v2/';

  httpOptions = {
    headers: new HttpHeaders({ 'X-Auth-Token': '8d9511c675274ff798a31232b9d30338' })
  };

  constructor(
    private http: HttpClient) { }

  getCompetitions(): Observable<CompetitionsRequestResult> {
    return this.http.get<CompetitionsRequestResult>(this.apiUrl+'competitions?plan=TIER_ONE', this.httpOptions)
  }
}
