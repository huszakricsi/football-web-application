import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Competition } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class FootballService {



  getCompetitions(): Observable<Competition[]> {
    const competitions = of( [{"id":2006,"area":{"id":2001,"name":"Africa","countryCode":"AFR","ensignUrl":null},"name":"WC Qualification","code":null,"emblemUrl":null,"plan":"TIER_FOUR","currentSeason":{"id":555,"startDate":"2019-09-04","endDate":"2021-11-16","currentMatchday":null,"winner":null},"numberOfAvailableSeasons":2,"lastUpdated":"2018-06-04T23:54:04Z"}]);
    return competitions;
  }

  getCompetitionById(id: number): Observable<Competition> {
    const competition = of( {"id":2006,"area":{"id":2001,"name":"Africa","countryCode":"AFR","ensignUrl":null},"name":"WC Qualification","code":null,"emblemUrl":null,"plan":"TIER_FOUR","currentSeason":{"id":555,"startDate":"2019-09-04","endDate":"2021-11-16","currentMatchday":null,"winner":null},"numberOfAvailableSeasons":2,"lastUpdated":"2018-06-04T23:54:04Z"});
    return competition;
  }
  

}
